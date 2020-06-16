<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Mail\MeetingMail;


class MeetingMailController extends Controller
{
    public function sendMail(Request $request)
    {
        $company = Company::find($request->co_id);
        $user = Auth::user();

        $data = [
            'from_name' => $user->name,
            'from_email' => $user->email,
            'user_avatar' =>$user->avatar,
            'company_name' => $company->name,
            'company_industry' => $company->industry,
            'company_headquarter' => $company->headquarter,
            'company_website' => $company->website,
            'company_overview' => $company->overview,
            'company_avatar' => $company->avatar,
            'to' => $request->to,
            'subject' => $request->subject,
            'message_content' => $request->content,
            'meeting_date' => $request->meeting_date,
            'meeting_link' => $request->meeting_link,
            'meeting_starts' => $request->meeting_starts,
            'meeting_ends' => $request->meeting_ends
        ];
        Mail::send(new MeetingMail($data));
        // return redirect('/');
        return response()->json(['message' => 'sent']);
    }
}
