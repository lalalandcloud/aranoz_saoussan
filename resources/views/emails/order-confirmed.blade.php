<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #16a34a;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
            margin-top: 20px;
            border-radius: 5px;
        }
        .order-details {
            margin: 20px 0;
        }
        .item {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        .total {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✓ Commande Confirmée</h1>
        </div>
        
        <div class="content">
            <p>Bonjour {{ $order->user->first_name }} {{ $order->user->last_name }},</p>
            
            <p>Votre commande <strong>#{{ $order->id }}</strong> a été confirmée et est en cours de préparation !</p>
            
            <div class="order-details">
                <h3>Détails de la commande :</h3>
                
                @foreach($order->items as $item)
                <div class="item">
                    <strong>{{ $item->product->name }}</strong> x {{ $item->quantity }}
                    <span style="float: right;">{{ number_format($item->total_price, 2) }}€</span>
                </div>
                @endforeach
                
                @if($order->discount_amount > 0)
                <div class="item" style="color: #16a34a;">
                    <strong>Réduction</strong>
                    <span style="float: right;">-{{ number_format($order->discount_amount, 2) }}€</span>
                </div>
                @endif
                
                <div class="total">
                    Total : {{ number_format($order->final_total, 2) }}€
                </div>
            </div>
            
            <p>Merci pour votre confiance !</p>
        </div>
    </div>
</body>
</html>