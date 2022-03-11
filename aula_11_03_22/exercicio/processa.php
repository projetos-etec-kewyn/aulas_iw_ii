<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Média</title>
        <style>
            p{
                color:green;
                font-size: 50px;
                text-align: center;
                font-family: DejaVu Sans Mono, monospace;
            }
        </style>
    </head>
    <body>

        <?php
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $num3 = $_POST['num3'];
        $soma = $num1 + $num2 + $num3;
        $media = $soma/3;
        echo "<p>A média dos três números é: $media</p>";
        ?>
        
    </body>
</html>