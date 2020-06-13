<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <style>
        h3 {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.2;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 300;
            line-height: 1.2;
        }

        .font-weight-bold {
            font-weight: 700 !important;
        }


        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        .display-4 {
            font-size: 2.5rem;
            font-weight: 300;
            line-height: 1.2;
        }

        .col-md-1,
        .col-md-2,
        .col-md-3,
        .col-md-4,
        .col-md-5,
        .col-md-6,
        .col-md-7,
        .col-md-8,
        .col-md-9,
        .col-md-10,
        .col-md-11,
        .col-md-12 {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
        }

        .col-md-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    </style>

</head>


<body>
    <div class="container">
        <h1 class="display-4"><b>{{ $data['subject'] }}</b></h1>

        <div class="row">

            <div class="col-md-6">
                <h2><span class="font-weight-bold ">From:</span> {{ $data['from_name'] }} ( {{ $data['from_email'] }} )</h2>

                <h2 class="font-weight-bold ">About the company</h2>
                <h3><span class="font-weight-bold ">Name: </span>{{ $data['company_name'] }}</h3>
                <h3><span class="font-weight-bold ">Industry: </span>{{ $data['company_industry'] }}</h3>
                <h3><span class="font-weight-bold ">Headquarter: </span>{{ $data['company_headquarter'] }}</h3>
                <h3><span class="font-weight-bold ">Website: </span>{{ $data['company_website'] }}</h3>
                <h3><span class="font-weight-bold ">Overview: </span>{{ $data['company_overview'] }}</h3>
            </div>
            <div class="col-md-6">
                <h3><span class="font-weight-bold ">Messasge: </span> {{ $data['message_content'] }}</h3>

                <h2 class="font-weight-bold ">Meeting</h2>
                <h3><span class="font-weight-bold ">Date: </span>{{ $data['meeting_date'] }}</h3>
                <h3><span class="font-weight-bold ">From: </span>{{ $data['meeting_starts'] }}</h3>
                <h3><span class="font-weight-bold ">To: </span>{{ $data['meeting_ends'] }}</h3>
                <h3><span class="font-weight-bold ">Link: </span>{{ $data['meeting_link'] }}</h3>

            </div>
        </div>






    </div>






</body>

</html>