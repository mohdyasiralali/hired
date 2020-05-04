<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;


class ContactMailController extends Controller
{
    public function sendMail(Request $request)
    {
        // dd($request->all());
        $data = [
            'email' => $request->email,
            'name' => $request->name,
            'message_body' => $request->message_body
        ];
        Mail::send(new ContactMail($data));
        return redirect('/');
    }
}
