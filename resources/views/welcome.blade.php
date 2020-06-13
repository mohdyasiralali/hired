<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hired</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    <!-- FONTAWESOME -->
    <script src="https://kit.fontawesome.com/41e7fe63fb.js" crossorigin="anonymous"></script>

</head>

<body>
    <!-- Header -->
    <section id="header">
        <div class="site-wrapper">
            <div class="overlay h-100">
                <div class="top-right">
                    <a class="btn btn-outline-light btn-round" href="{{ route('home') }}">Jobs</a>
                    <button class="btn btn-outline-light btn-round" id="contact-btn">Contact Us</button>
                </div>

                <div class="overview p-5">
                    <div class="row">
                        <div class="col-lg-5">
                            <h1 class="title mb-5" style="font-family: 'Roboto', sans-serif;">Hired</h1>
                            <h1 class="subtitle text-uppercase">Come for the job… stay for the challenge</h1>
                            <p>The project helps people in their search for jobs and companies in their recruitment. The application facilitates the process for both the applicants and the recruiters through quizzes, challenges and interviews.</p>
                            <h1 class="ml11">
                                <span class="text-wrapper">
                                    <span class="line line1"></span>
                                    <span class="letters">Solve, Apply, Connect!</span>
                                </span>
                            </h1>
                            <button class="btn btn-light btn-lg btn-round mb-5 mt-5" id="more-btn">Learn More</button>

                        </div>
                        <div class="col-md-7"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features">
        <!-- <?php phpinfo(); ?> -->
        <div class="p-5">
            <div class="container text-center">
                <h1 class="display-4 text-weight-bold" style="color: #407093">About</h1>
                <hr style="border-color: #407093; width:250px" class="mb-5">

                <div class="row mt-5">
                    <div class="col-md-3 text-center mb-4">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/get-hired.png') }}" alt="">
                        <h3 class="font-weight-bold">Get Hired!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/cand.png') }}" alt="">
                        <h3 class="font-weight-bold">Fill you profile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/video-call.png') }}" alt="">
                        <h3 class="font-weight-bold">Video Calls</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/chat.png') }}" alt="">
                        <h3 class="font-weight-bold">Messaging!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-4">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/challenge.png') }}" alt="">
                        <h3 class="font-weight-bold">Challenges</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/writer.png') }}" alt="">
                        <h3 class="font-weight-bold">Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/company.png') }}" alt="">
                        <h3 class="font-weight-bold">Partners</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-3 text-center mb-5">
                        <img class="w-50 mb-2" src="{{ asset('/storage/images/features/email.png') }}" alt="">
                        <h3 class="font-weight-bold">Invitations</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="q&a">
        <div class="row">
            <div class="col-md-5">
                <img class="img-fluid" src="{{ asset('/storage/images/pic1.jpeg') }}" style="border-top-right-radius:100px" alt="">
            </div>
            <div class="col-md-7 text-center p-5 align-items-center justify-content-center">

                <hr style="border-color: #407093; width:90%">
                <p class="display-4">What does your organization need?</p>
                <hr style="border-color: #407093; width:90%" class="mb-5">

                <p>You now know how self-organizing teams could benefit you or your company.
                    You know what’s essential to have a self-organizing team. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit.
                </p>
                <p>You now know how self-organizing teams could benefit you or your company.
                    You know what’s essential to have a self-organizing team. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Doloribus enim dolor sequi totam
                    quae repudiandae, mollitia at et omnis? Fugit eligendi. Doloribus enim dolor sequi totam
                    quae repudiandae, mollitia at et omnis? Fugit eligendi
                </p>
            </div>
        </div>
    </section>

    <section id="choose-applicants" style="background-color: #212121">
        <div class="row">
            <div class="col-md-5">
                <img class="img-fluid" src="{{ asset('/storage/images/applications.png') }}" alt="">
            </div>
            <div class="col-md-7 p-5 text-center breaker">
                <div class="my-auto">

                    <p class="display-4"><b>Choose Your Applicants</b></p>
                    <hr style="border-color:white">

                    <p class="mt-5">You now know how self-organizing teams could benefit you or your company.
                        You know what’s essential to have a self-organizing team,
                        and three steps to guide a team to self-organization.
                    </p>
                    <p>You now know how self-organizing teams could benefit you or your company.
                        You know what’s essential to have a self-organizing team,
                        and three steps to guide a team to self-organization.You know what’s essential to have a self-organizing team,
                        and three steps to guide a team to self-organization.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <section id="contact">
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h3>Get In Touch</h3>
                        <p class="lead">Leave us a message !</p>
                        <form action="{{ url('/contact-us') }}" method="post">
                            {{ csrf_field() }}
                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Name" name="name" required>
                            </div>
                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input type="email" class="form-control" placeholder="Email" name="email" required>
                            </div>
                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-pencil-alt"></i>
                                    </span>
                                </div>
                                <textarea class="form-control" name="message_body" placeholder="Message" rows="5" required></textarea>
                            </div>
                            <input type="submit" value="Submit" class="btn btn-dark btn-round btn-block btn-lg btn-get-started">
                        </form>
                    </div>
                    <div class="col-lg-6 align-self-center">
                        <img src="{{ asset('/storage/images/contactus.jpg') }}" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="footer">
        <footer id="sticky-footer" class="py-4 text-light" style="background-color:#2F3133;">
            <div class="container text-center">
                <strong>Copyright &copy; Mohamad Al Ali | SE Factory</strong>
            </div>
        </footer>
    </section>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script>
        $("#contact-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 2000);
        });

        $("#more-btn").click(function() {
            $('html, body').animate({
                scrollTop: $("#features").offset().top
            }, 2000);
        });

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({
                loop: true
            })
            .add({
                targets: '.ml11 .line',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.ml11 .line',
                translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 100
            }).add({
                targets: '.ml11 .letter',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            }).add({
                targets: '.ml11',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    </script>
</body>

</html>