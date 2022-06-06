<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gráficos</title>
    </head>
    <body>
        <div id="columnchart_material" style="width: 800px; height: 500px;"></div>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Year', 'Azul', 'Vermelho', 'Amarelo','Verde','Roxo'],
            ['2014', 123,324,253,535,53],
            ['2015', 1170, 460, 250,255,67],
            ['2016', 660, 1120, 300,663,54],
            ['2017', 1030, 540, 350,664,65]
            ]);

            var options = {
            chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            }
            };

            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
        </script>
    </body>
</html>