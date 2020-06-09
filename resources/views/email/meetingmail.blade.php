<!DOCTYPE html>
<!-- <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head> -->
<html>

<body>
    <h1><b>{{ $data['subject'] }}</b></h1>

    <h2><b>From: </b> {{ $data['from_name'] }} ( {{ $data['from_email'] }} )</h2>
    <h2><b>About the company</b></h2>
    <h3><b>Name: </b>{{ $data['company_name'] }}</h3>
    <h3><b>Industry: </b>{{ $data['company_industry'] }}</h3>
    <h3><b>Headquarter: </b>{{ $data['company_headquarter'] }}</h3>
    <h3><b>Website: </b>{{ $data['company_website'] }}</h3>
    <h3><b>Overview: </b>{{ $data['company_overview'] }}</h3>


    <hr>
    <h3><b>Messasge: </b> {{ $data['message_content'] }}</h3>

    <h2><b>Meeting</b></h2>
    <h3><b>Date: </b>{{ $data['meeting_date'] }}</h3>
    <h3><b>From: </b>{{ $data['meeting_starts'] }}</h3>
    <h3><b>To: </b>{{ $data['meeting_ends'] }}</h3>
    <h3><b>Link: </b>{{ $data['meeting_link'] }}</h3>





</body>

</html>