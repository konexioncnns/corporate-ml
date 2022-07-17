<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DomaineController;
use App\Http\Controllers\Frontend\BlogController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DemoController;
use App\Http\Controllers\Front\CurrencyController;
use App\Http\Controllers\Admin\FormateurController;
use App\Http\Controllers\Admin\FormationController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SpecialiteController;
use App\Http\Controllers\Admin\SolutionController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Frontend\CheckoutController;
use App\Http\Controllers\Frontend\ProfileController;
use App\Http\Controllers\Frontend\SearchController;
use App\Http\Controllers\Frontend\TrainingController;
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
Route::get('/domaines', [DomaineController::class,'getAllDomaine'])->name('getdomaines');

Route::get('/user/orders', [CheckoutController::class,'getorders'])->name('getorders')->middleware("auth");
 Route::get('/user/order/{order_id}', [CheckoutController::class,'getOrderDetail'])->name('user.orderdetais');
Route::inertia('/checkout','Checkout2')->name('checkout') ;
Route::post('/checkout/placeorder', [CheckoutController::class,'placeorder'])->name('placeorder');
Route::get('/checkout/pdf/{order_number}', [CheckoutController::class,'createPDF'])->name('pdf');
Route::get('/catalogue/download', [CheckoutController::class,'download'])->name('download');

Route::inertia('/thankyou','Thankyou')->name('paymentsuccess') ;
Route::inertia('/test','Test')->name('test') ;

Route::get('/formation', [TrainingController::class,'getAll'])->name('getAll');
Route::get('/formation/{id}', [TrainingController::class,'getOne'])->name('formationDetail');
Route::get('indexform', [FormationController::class,'index'])->name('indexform');

Route::get('langue/{code}', [LanguageController::class,'switchLang'])->name('langue');
//Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'App\Http\Controllers\LanguageController@switchLang']);
//Route::get('/profile',[HomeController::class,'profileDetail'])->name('profile');
Route::get("searchText",[SearchController::class,'search']);

Route::resource('profiles', ProfileController::class);


Route::inertia('/profile/order','Profile/MyOrder')->name('profile/order') ;

Route::get('/profile',[ProfileController::class,'getUser'])->name('profile')->middleware("auth");


Route::inertia('/user/edit','Profile/MyProfile')->name('user-profile');

Route::inertia('/user/setting','Profile/Setting')->name('profile/setting') ;
Route::inertia('/admins','Admin/Dashboard')->name('admins') ;
Route::inertia('/profile/training','Profile/Formation')->name('profile/training') ;
Route::inertia('/myProfile','ProfileLayout')->name('myProfile') ;
Route::inertia('/','Home');
Route::inertia('/about','About')->name('about') ;
Route::inertia('/contact','Contact')->name('contact') ;
Route::inertia('/contactus','ContactUs2')->name('contactus') ;
Route::inertia('/apropos','Propos')->name('apropos') ;
Route::inertia('/blog','Blog')->name('blog') ;


Route::get('/articles', [BlogController::class,'index'])->name('articles');
Route::get('/article/{id}', [BlogController::class,'getOne'])->name('ArticleDetail');
Route::inertia('/demo','Demo')->name('demo') ;
Route::inertia('/catalogue','Catalogue')->name('catalogue') ;
Route::inertia('/home','Home')->name('home') ;
//Route::inertia('/search','SearchPage')->name('search') ;

Route::get('/services',[ServiceController::class,'getAll'])->name('services');
Route::get('/service/{id}',[ServiceController::class,'getOne'])->name('service') ;
//Route::get('/search',[TrainingController::class,'search'])->name('searchform') ;
Route::get('/search',[DomaineController::class,'getAll'])->name('search') ;
//Route::get('/test',[DomaineController::class,'getAll'])->name('test') ;
Route::inertia('/posts','Publication')->name('posts') ;
Route::inertia('/cart','Cart')->name('cart') ;

Route::get('/h', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
      
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/currency', [CurrencyController::class,'index'])->name('currency');
Route::resource('contacts',ContactController::class);
Route::post('/contact/store', [ContactController::class,'store'])->name('contact.save');

Route::post('/demo/store', [DemoController::class,'store'])->name('demo.save');
/* ADMINISTRATION */
Route::get('/domaine/list', [DomaineController::class,'index'])->name('domaine.list');
Route::post('domaine.store', [DomaineController::class,'store'])->name('domaine.store');
Route::get('/domaine/edit/{id}', [DomaineController::class,'edit'])->name('domaine.edit');
Route::get('/domaine/add', [DomaineController::class,'create'])->name('domaine.add');
Route::post('/domaine/update  ', [DomaineController::class,'update'])->name('domaine.update') ; 
//Solution
Route::get('/admin/solution/add', [SolutionController::class,'create'])->name('solution.add');
Route::post('/admin/solution.store', [SolutionController::class,'store'])->name('solution.store');
Route::get('/admin/solution/list', [SolutionController::class,'index'])->name('solution.list');
Route::get('/admin/solution/edit/{id}', [SolutionController::class,'edit'])->name('solution.edit');
Route::post('/admin/solution/update', [SolutionController::class,'update'])->name('solution.update');
//Service
Route::get('/admin/service/add',[ServiceController::class,'create'])->name('service.add');
Route::post('/admin/service.store',[ServiceController::class,'store'])->name('service.store');
Route::get('/admin/service/list',[ServiceController::class,'index'])->name('service.list');
Route::get('/admin/service/edit/{id}', [ServiceController::class,'edit'])->name('service.edit');
Route::post('/admin/service/update', [ServiceController::class,'update'])->name('service.update');
//Team
Route::get('/admin/team/add',[TeamController::class,'create'])->name('team.add');
Route::post('/admin/team.store',[TeamController::class,'store'])->name('team.store');
Route::get('/admin/team/list',[TeamController::class,'index'])->name('team.list');
Route::get('/admin/team/edit/{id}', [TeamController::class,'edit'])->name('team.edit');
Route::post('/admin/team/update', [TeamController::class,'update'])->name('team.update');
//Partenaire
Route::get('/admin/partner/add',[PartnerController::class,'create'])->name('partner.add');
Route::post('/admin/partner.store',[PartnerController::class,'store'])->name('partner.store');
Route::get('/admin/partner/list',[PartnerController::class,'index'])->name('partner.list');

Route::get('/admin/partner/edit/{id}', [PartnerController::class,'edit'])->name('partner.edit');
Route::post('/admin/partner/update', [PartnerController::class,'update'])->name('partner.update');

//Slider
Route::get('/admin/slider/list', [SliderController::class,'index'])->name('slider.list');
Route::get('/admin/slider/add', [SliderController::class,'create'])->name('slider.add');
Route::post('/admin/slider.store', [SliderController::class,'store'])->name('slider.store');
Route::get('/admin/slider/edit/{id}', [SliderController::class,'edit'])->name('slider.edit');
Route::get('/admin/slider/delete/{id}', [SliderController::class,'destroy'])->name('slider.delete');
//Specialite 

Route::get('/admin/specialite/list', [SpecialiteController::class,'index'])->name('specialite.list');
Route::get('/admin/specialite/add', [SpecialiteController::class,'create'])->name('specialite.add');
Route::post('/admin/specialite.store', [SpecialiteController::class,'store'])->name('specialite.store');
Route::get('/admin/category/edit/{id}', [SpecialiteController::class,'edit'])->name('specialite.edit');
//Formateurs
Route::get('/admin/formateur/list', [FormateurController::class,'index'])->name('formateur.list');
Route::get('/admin/formateur/add', [FormateurController::class,'create'])->name('formateur.add');
Route::post('/admin/formateur.store', [FormateurController::class,'store'])->name('formateur.store');
Route::get('/admin/formateur/edit/{id}', [FormateurController::class,'edit'])->name('formateur.edit');
Route::post('/admin/formateur/update', [FormateurController::class,'update'])->name('formateur.update') ; 
Route::get('/admin/formateur/delete/{id}', [FormateurController::class,'destroy'])->name('formateur.delete');
//Formation
Route::get('/admin/formation/list', [FormationController::class,'list'])->name('formation.list');
Route::get('/admin/formation/add', [FormationController::class,'create'])->name('formation.add');
Route::get('/admin/formation/edit/{id}',[FormationController::class,'edit'])->name('formation.edit');
Route::post('/admin/formation/update', [FormationController::class,'update'])->name('formation.update'); 
Route::post('/admin/formation/store', [FormationController::class,'store'])->name('formation.store');
Route::get('/admin/domaine/delete/{id}', [FormationController::class,'destroy'])->name('domaine.delete');
//Post
Route::get('/admin/post/list', [PostController::class,'index'])->name('post.list');
Route::get('/admin/post/add', [PostController::class,'create'])->name('post.add');
Route::post('/admin/post.store', [PostController::class,'store'])->name('post.store');
Route::get('/admin/post/edit/{id}', [PostController::class,'edit'])->name('post.edit');
Route::post('/admin/post/update', [PostController::class,'update'])->name('post.update');
Route::get('/admin/post/delete/{id}', [CategoryController::class,'destroy'])->name('post.delete');
//Categories post
Route::get('/admin/category/list', [CategoryController::class,'index'])->name('category.list');
Route::get('/admin/category/add', [CategoryController::class,'create'])->name('category.add');
Route::post('/admin/category.store', [CategoryController::class,'store'])->name('category.store');
Route::get('/admin/category/edit/{id}', [CategoryController::class,'edit'])->name('category.edit');
Route::post('/admin/category/update  ', [CategoryController::class,'update'])->name('category.update') ; 
Route::get('/admin/category/delete/{id}', [CategoryController::class,'destroy'])->name('category.delete');
Route::get('admin',function(){
    return view('layouts.master');
});




Route::get('admin/formation/index',function(){
    return view('admin.formations.index');
});

require __DIR__.'/auth.php';
