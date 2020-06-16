<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
    <script src="https://kit.fontawesome.com/41e7fe63fb.js" crossorigin="anonymous"></script>

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
            ;
        }

        .col-md-6,
        .col-md-4 {
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

        .col-md-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

        .text-center {
            text-align: center !important;
        }

        .text-muted {
            color: #6c757d !important;
        }

        .text-white {
            color: #fff !important;
        }

        .mt-5,
        .my-5 {
            margin-top: 3rem !important;
        }

        .rounded-circle {
            border-radius: 50% !important;
        }

        .img-fluid {
            max-width: 100%;
            height: auto;
        }

        .w-50 {
            width: 50% !important;
        }

        .p-3 {
            padding: 1rem !important;
        }

        .bg-dark {
            background-color: #343a40 !important;
        }

        /* ================================= CUSTOM */
        #header {
            height: 200px;
            background-color: #2f3133;
        }

        .brand {
            font-size: 135px;
            font-family: "Roboto", sans-serif;
        }

        .subject {
            font-size: 42px;
            font-family: "Roboto", sans-serif;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet" />
</head>

<body>
    <div class="container">
        <div id="header" class="text-center">
            <h1 class="brand text-white">
                Hired
            </h1>
        </div>
        <div id="body">

            <h1 class="subject mt-5"><b>{{ $data['subject'] }}</b></h1>

            <!-- <div class="text-center">
                <?php $cimg = 'storage/images/companies/' . $data['company_avatar']; ?>
                <img src=<?php echo $cimg ?> class="rounded-circle w-50" alt="avatar">
            </div> -->


            <div class="row">
                <div class="col-md-7 bg-dark text-white p-3">

                    <h3 class="subject font-weight-bold">{{ $data['company_name'] }}</h3>
                    <h3>
                        <span class="font-weight-bold">Industry: </span>{{
              $data['company_industry'] }}
                    </h3>
                    <h3>
                        <span class="font-weight-bold">Headquarter: </span>{{
              $data['company_headquarter'] }}
                    </h3>
                    <h3>
                        <span class="font-weight-bold">Website: </span>{{
              $data['company_website'] }}
                    </h3>
                    <h3>
                        <span class="font-weight-bold">Overview: </span>{{
              $data['company_overview'] }}
                    </h3>
                </div>
                <div class="col-md-5 p-3">
                    <div class="text-center">
                        <?php $img = $data['user_avatar']; ?>
                        <img src=<?php echo $img ?> class="rounded-circle w-50" alt="avatar">
                    </div>
                    <div class="text-center">
                        <h2>{{ $data['from_name']}}</h2>
                        <h2>{{ $data['from_email'] }}</h2>
                    </div>

                </div>
            </div>
            <div>
                <h3>
                    <span class="font-weight-bold">Messasge: </span> {{
              $data['message_content'] }}
                </h3>

                <h2 class="font-weight-bold">Meeting</h2>
                <div class="row">
                    <div class="col-md-4">
                        <h3>
                            <span class="font-weight-bold text-center">Date: </span>{{
              $data['meeting_date'] }}
                        </h3>
                    </div>
                    <div class="col-md-4">
                        <h3>
                            <span class="font-weight-bold text-center">From: </span>{{
              $data['meeting_starts'] }}
                        </h3>
                    </div>
                    <div class="col-md-4">
                        <h3>
                            <span class="font-weight-bold text-center">To: </span>{{ $data['meeting_ends']
              }}
                        </h3>
                    </div>

                </div>



                <h3>
                    <span class="font-weight-bold">Link: </span>{{
              $data['meeting_link'] }}
                </h3>
            </div>
        </div>
    </div>
</body>

</html>