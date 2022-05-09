// libraries
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Grid, Card } from '@mui/material';
import { createChart } from 'lightweight-charts';
// services
import { supabase } from '../util/supabaseClient';
import { useCryptos } from '../hooks/useCryptos';
// components
// import Cryptocurrencies from './Cryptocurrencies';
// import PieChart from './PieChart';
// import PortfolioLineChart from './PortfolioLineChart';
// import Loader from './Loader';
// import TradingViewAlerts from './TradingViewAlerts';


const Portfolio = () => {
  const { assets, loading, error } = useCryptos();
  console.log({ assets, loading, error });

  useEffect(() => {
    const url = 'wss://stream.data.alpaca.markets/v1beta1/crypto';
    const socket  = new WebSocket(url);
    const auth = {'action': 'auth', 'key': 'PKHV9HUOEPIBJG0BJFHL', 'secret': '5YB4qWw7ywEh3Y1jNpV8ikniW4BdOkedybpC1Jtq'};
    const subscribe = {'action':'subscribe','trades':['ETHUSD'],'quotes':['ETHUSD'],'bars':['ETHUSD']};
    socket.onmessage = (event) => {
      const { data } = event;
      const response = JSON.parse(data);
      const { S, T, ap, as, bp, bs, t, x, msg } = response[0];
      // console.info({ response: response[0] });
      if  (msg === 'connected') socket.send(JSON.stringify(auth));
      if  (msg === 'authenticated') socket.send(JSON.stringify(subscribe));

      if (S) return {
        'q': () => console.log('Got a quote.'),
        't': () => console.log('Got a trade.'),
        'b': () => console.log('Got a bar.'),
      }[T]();
    };
  }, []);

  const chartEl = useRef(null);
  // TradingView Charting
  const chart = createChart(chartEl.current, { width: 400, height: 300 });
  const lineSeries = chart.addLineSeries();
  lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 },
  ]);

  return loading ? 'Loading...' : (
    <>
      <Typography level={2} className="heading">Crypto Portfolio</Typography>
      <Grid container>
        {[
          { title: 'Total Assets in Cash', value: `$${0}` },
          { title: 'Total Exchanges', value: '2' },
          { title: 'Total Market Cap:', value: '' },
          { title: 'Total 24h Volume', value: '' },
          { title: 'Total Cryptocurrencies', value: loading ? 0 : assets.length },
          { title: 'Total Markets', value: '1' },
        ].map(({ title, value }, i) => (
          <Grid key={i} item md={4}>
            <Card>
              <Typography>{title}</Typography>
              <Typography>{value}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className="home-heading-container">
        <Typography level={2} className="home-Typography">
          Holding Analytics
        </Typography>
      </div>
      <Grid container>
        <Grid item md={4}>
          {/* <PieChart holdings={totals?.holdings || 0} cashTotal={totals?.cashTotal || 0} /> */}
        </Grid>
        <Grid item md={8}>
          {/* <PortfolioLineChart cryptos={cryptos} totals={totals} /> */}
        </Grid>
      </Grid>

      <div className="home-heading-container">
        <Typography level={2} className="home-Typography">
          Active Trading
        </Typography>
      </div>
      <div ref={chartEl}></div>
      {/* <TradingViewAlerts /> */}

      <div className="home-heading-container">
        <Typography level={2} className="home-title">
          Cryptos Holding
        </Typography>
      </div>
    </>
  );
};

export default Portfolio;
