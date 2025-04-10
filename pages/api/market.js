export default async function handler(req, res) {
  try {
    const coingecko = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const btc = await coingecko.json();

    const goldApi = await fetch('https://api.metals.live/api/spot/gold');
    const gold = await goldApi.json();

    const oilApi = await fetch('https://api.api-ninjas.com/v1/oilprice', {
      headers: { 'X-Api-Key': gPq9PUR7C/darHdv0CPaZQ==2NQPeaFfedqiGYsl }
    });
    const oil = await oilApi.json();

    res.status(200).json({
      btc: btc.bitcoin.usd,
      gold: gold[0],
      oil: oil.price
    });
  } catch (error) {
    res.status(500).json({ error: 'Błąd pobierania danych rynkowych' });
  }
}