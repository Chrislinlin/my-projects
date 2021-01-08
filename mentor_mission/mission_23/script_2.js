//1. .ajax exchange the rate and updata the DOM
    //jquery 裡沒有fetch() 是.ajax()

    $('#currency-one, #currenecy-two').change(function(){
        var currency_one =  $('#currency-one').val();
        var currency_two =  $('#currency-two').val(); 
        // console.log($(this).val() );
        $.ajax({
            method: "GET",
            url: 'https://api.exchangerate-api.com/v4/latest/'+currency_one
            }).done(function(data){
                const rate = data.rates[currency_two];

                $('#rate').text(1 +currency_one +' = '+ currency_two);
                $('#amount-two').val(($('#amount-one').val() * rate).toFixed(2));
            })

// 2. 更改input的change
    $(":input").change(function(){
        $.ajax({
            method: "GET",
            url: 'https://api.exchangerate-api.com/v4/latest/'+currency_one
            }).done(function(data){
                const rate = data.rates[currency_two];
                $('#rate').text(1 +currency_one +' = '+ currency_two);
                $('#amount-two').val(($('#amount-one').val() * rate).toFixed(2))

            })
        })
    });
//3. 點選swap時，金額匯率一銅更改
    $('#swap').click(function(){
        var temp =  $('#currency-one').val();
        $('#currency-one').val($('#currency-two').val());
        $('#currency-two').val(temp);
        var currency_one =  $('#currency-one').val();
        var currency_two =  $('#currency-two').val(); 

        $.ajax({
            method: "GET",
            url: 'https://api.exchangerate-api.com/v4/latest/'+currency_one
            }).done(function(data){
                const rate = data.rates[currency_two];
                $('#rate').text(1 +currency_one +' = '+ currency_two);
                $('#amount-two').val(($('#amount-one').val() * rate).toFixed(2));
            })
        
        // console.log(currency_one);
        // const temp =currency_one;
        // currency_one = currency_two;
        // currency_two = temp;

    });

        
