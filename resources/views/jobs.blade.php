<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- FONTAWESOME -->
    <script src="https://kit.fontawesome.com/41e7fe63fb.js" crossorigin="anonymous"></script>
    <link href="{{ asset('css/jobs.css') }}" rel="stylesheet">


</head>

<body>
    <section>
        <div class="hero-image">
            <div>
                @if (Route::has('login'))
                <div class="top-right">
                    @auth
                    <a class="btn btn-outline-light btn-round" href="{{ url('/home') }}">Home</a>
                    @else
                    <a class="btn btn-outline-light btn-round" href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                    <a class="btn btn-outline-light btn-round" href="{{ route('register') }}">Register</a>
                    @endif
                    @endauth
                </div>
                @endif
            </div>

            <div class="row">
                <div class="col-md-7 p-5 skills-filter text-light">
                    <div class="row-fluid pl-5 text-center mb-5 d-flex align-items-start" id="container">
                        <div class="col-md-3 skills ml-3 mr-5">
                            <p>Php</p>
                            <p>Laravel</p>
                            <p>Reactjs</p>
                            <p>VueJs</p>
                            <p>AngularJs</p>
                            <p>React Native</p>
                            <p>Firebase</p>
                            <p>Ruby</p>
                        </div>
                        <div class="col-md-3 skills ml-3 mr-5">
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div class="col-md-3 skills ml-3 mr-5">
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div class="col-md-3 skills ml-3 mr-5">
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div class="col-md-3 skills ml-3 mr-5">
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                    </div>

                    <button id="slideBack" class="text-light scroll-btn"><i class="fas fa-chevron-left"></i></button>
                    <span class="scroll-btn">/Filter by Skills</span>
                    <button id="slide" class="text-light scroll-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container mt-5">
            <div class="row container">
                <div class="col-md-4">
                    <div class="card card-block rounded ">
                        <div class="card-top w-100 text-center p-3 rounded-top"></div>
                        <img src="https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg" alt="profile-image" class="rounded-circle card-profile" />

                        <div class="card-block p-3 mt-4">
                            <h4 class="card-title font-weight-bold">TikTok</h4>
                            <a href="#">2 Jobs Offers</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-block rounded ">
                        <div class="card-top w-100 text-center p-3 rounded-top"></div>
                        <img src="https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg" alt="profile-image" class="rounded-circle card-profile" />

                        <div class="card-block p-3 mt-4">
                            <h4 class="card-title font-weight-bold">TikTok</h4>
                            <a href="#">2 Jobs Offers</a>
                        </div>
                    </div>
                </div>

            </div>
    </section>

    <section id="footer" class="mt-5">
        <footer id="sticky-footer" class="py-4 text-light" style="background-color:#2f005d;">
            <div class="container text-center">
                <strong>Copyright &copy; Mohamad Al Ali | SE Factory</strong>
            </div>
        </footer>
    </section>



    <script>
        var button = document.getElementById('slide');
        button.onclick = function() {
            var container = document.getElementById('container');
            sideScroll(container, 'right', 25, 250, 10);
        };

        var back = document.getElementById('slideBack');
        back.onclick = function() {
            var container = document.getElementById('container');
            sideScroll(container, 'left', 25, 250, 10);
        };

        function sideScroll(element, direction, speed, distance, step) {
            scrollAmount = 0;
            var slideTimer = setInterval(function() {
                if (direction == 'left') {
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if (scrollAmount >= distance) {
                    window.clearInterval(slideTimer);
                }
            }, speed);
        }
    </script>
</body>

</html>