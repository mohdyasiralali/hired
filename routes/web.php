 <?php

    use App\Mail\ContactMail;
    use Illuminate\Support\Facades\Route;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Request;


    /*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

    Route::get('/', function () {
        return view('welcome');
    });

    Auth::routes();

    // EMAIL: CONTUCT US | MEETING
    Route::post('/contact-us', 'ContactMailController@sendMail');
    Route::post('/meeting-mail', 'MeetingMailController@sendMail');

    // Google
    Route::get('/redirect', 'Auth\LoginController@redirectToProvider')->name('google');
    Route::get('/callback', 'Auth\LoginController@handleProviderCallback');

    Route::prefix('/api')->group(function () {
        // HOME CONTROLLER
        // ---------------
        Route::get('/home', 'HomeController@index')->name('home');
        // CHECK 1st ATTEMPT
        Route::get('/first_attempt', 'HomeController@first_attempt');
        // SKILLS (GET, STORE, DELETE)
        Route::get('/skills', 'HomeController@get_skills');
        Route::post('/skills/add', 'HomeController@add_skills');
        Route::delete('/skill/delete/{skill_id}', 'HomeController@deleteSkill');
        // COMPANIES(GET, SEARCH BY LOCATION)
        Route::get('/companies/get/all', 'HomeController@get_companies');
        Route::get('/companies/get/{location}', 'HomeController@get_companies_bylocation');
        // AUTH USER
        Route::get('/get_user', 'HomeController@user');
        Route::get('/authenticated_user', 'HomeController@auth_user');
        // UPLOAD IMAGE
        Route::post('/image/upload', 'HomeController@upload');

        // USER CONTROLLER
        Route::get('/user_skills', 'UserController@get_user_skills');

        // PROFILE CONTROLLER
        Route::get('/profile/{profile_id}', 'ProfileController@show');
        Route::put('/profile/{profile_id}/edit', 'ProfileController@edit');

        // COMPANY CONTROLLER
        Route::post('/company/create', 'CompanyController@create');
        Route::put('/company/update/{id}', 'CompanyController@update');
        Route::get('/company/auth/{id}', 'CompanyController@comp_auth');
        Route::get('/company/matching/{id}', 'CompanyController@get_matching');

        // JOB CONTROLLER 
        Route::post('/job/create', 'JobController@create');
        Route::get('/jobs/get/{co_id}', 'JobController@get_jobs');
        Route::get('/jobs/get', 'JobController@get');
        Route::delete('/job/delete/{id}', 'JobController@delete');
        Route::put('/job/update/{id}', 'JobController@update');

        // APPLICATION CONTROLLER
        Route::post('/job/apply/{id}', 'ApplicationController@apply');
        Route::get('/applications/get/{id}', 'ApplicationController@get');
        Route::delete('/application/delete/{id}', 'ApplicationController@delete');

        // QUIZ CONTROLLER (GET, SEARCH)
        Route::get('/quizzes/get', 'QuizController@get');
        Route::get('/quizzes/get/{searchKey}', 'QuizController@search');
        Route::get('/quiz/get/{id}', 'QuizController@getQuiz');

        // CHALLENGE CONTROLLER (STORE, GET ALL, SEARCH, SUBMIT, DESTROY)
        Route::get('/challenges/get/{id}', 'ChallengeController@get');
        Route::get('/challenges/get/{id}/{searchKey}', 'ChallengeController@search');
        Route::get('/challenge/questions/{id}', 'ChallengeController@get_questions');
        Route::get('/challenges/company/get/{id}', 'ChallengeController@get_company_challenges');
        Route::get('/challenges/user/{id}', 'ChallengeController@user_challenges');
        Route::delete('/challenge/delete/{id}', 'ChallengeController@delete');
        Route::post('/challenge/create', 'ChallengeController@create');
        Route::post('/challenge/submit', 'ChallengeController@submit');

        // ANSWER CONTROLLER
        // SUBMISSIONS(GET BY COMPANY ID)
        Route::get('/challenge/submissions/get/{id}', 'AnswerController@submissions');

        // PORTFOLIO IMAGES/LINKS CONTROLLERS
        // ----------------------------------
        // IMAGES (STORE, GET)
        Route::post('/portfolio/fileupload', 'PortfolioImageController@store');
        Route::get('/portfolio/images/{id}', 'PortfolioImageController@get_images');
        // LINKS (STORE, GET)
        Route::post('/portfolio/addlink', 'PortfolioLinkController@store');
        Route::get('/portfolio/links/{id}', 'PortfolioLinkController@get_links');

        // ARTICLES CONTROLLER (STORE - GET ALL - GET BY ID)
        Route::post("/blog/articles/create", 'ArticleController@create');
        Route::get("/blog/articles", 'ArticleController@get');
        Route::get("/blog/articles/{id}", 'ArticleController@get_byId');

        // COMMENTS CONTROLLER (STORE)
        Route::post('/article/comments/add', 'CommentController@create');
    });
