<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Hired</title>

    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- FONTAWESOME -->
    <script src="https://kit.fontawesome.com/41e7fe63fb.js" crossorigin="anonymous"></script>

    <style>
        .btn-round {
            border-radius: 20px;
            width: 150px;
        }

        body,
        html {
            min-height: 100%;
            font-family: Nunito;
        }
        .hero-image {
            background-image: linear-gradient(to bottom, rgba(118, 109, 255, 0.5) 0%,
                        rgb(136, 243, 255, 0.5)),
                url('/storage/images/bg-jobs.jpg');
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .navbar-brand{
            font-family: Pacifico;
        }

    </style>
</head>

<body class="hero-image">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-no-bg">

            <div class="container">
                <a class="navbar-brand text-white" href="{{ url('/') }}">
                    <h2>Hired</h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <!-- <ul class="navbar-nav mr-auto"></ul> -->
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                        <li class="nav-item">
                            <a class="nav-link btn btn-danger btn-round mr-2" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link btn btn-danger btn-round mr-2" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                        @endif
                        @else
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            @yield('content')
        </main>
    </div>
</body>

</html>