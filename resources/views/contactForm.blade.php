@extends('./welcome')

@section('form')

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
                    <input type="submit" value="Submit" class="btn btn-primary btn-round btn-block btn-lg btn-get-started">
                </form>
            </div>
            <div class="col-lg-6 align-self-center">
                <img src="{{ asset('/storage/images/contactus.jpg') }}" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</div>

@endsection