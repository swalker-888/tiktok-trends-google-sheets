function tiktokTrend(trend, timeframe) {
  var yourId = "your user id";

  var options = {
    method: "get",
    contentType: "application/json",
    headers: {
      "anonymous-user-id": yourId,
    },
  };

  var response = UrlFetchApp.fetch(
    `https://ads.tiktok.com/creative_radar_api/v1/popular_trend/hashtag/detail?period=${timeframe}&hashtag_name=${trend}&country_code=GB`,
    options
  );

  var result = JSON.parse(response.getContentText());

  console.log(result);

  var trendData = result.data.info.trend;

  console.log(trendData);

  var trendValues = trendData.map((trend) => [
    new Date(trend.time * 1000),
    trend.value,
  ]);

  console.log(trendValues);

  return trendValues;
}
