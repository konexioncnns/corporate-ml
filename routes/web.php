<?php
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\FormationController;
use App\Http\Controllers\Admin\FormateurController;
use App\Http\Controllers\Admin\DomaineController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SpecialiteController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Front\CurrencyController;
use App\Http\Controllers\Frontend\TrainingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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
Route::get('getAll', [TrainingController::class,'getAll'])->name('getAll');
Route::get('/formation/{id}', [TrainingController::class,'getOne'])->name('formationDetail');
Route::get('indexform', [FormationController::class,'index'])->name('indexform');

Route::get('langue/{code}', [LanguageController::class,'switchLang'])->name('langue');
//Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'App\Http\Controllers\LanguageController@switchLang']);
Route::get('/profile',[HomeController::class,'profileDetail'])->name('profile');
Route::inertia('/profile/order','Profile/Order')->name('profile/order') ;
Route::inertia('/profile/setting','Profile/Reglages')->name('profile/setting') ;
Route::inertia('/admins','Admin/Dashboard')->name('admins') ;
Route::inertia('/profile/training','Profile/Formation')->name('profile/training') ;
Route::inertia('/myProfile','ProfileLayout')->name('myProfile') ;
Route::get('/',[FormationController::class,'index']);
Route::inertia('/about','About')->name('about') ;
Route::inertia('/contact','Contact')->name('contact') ;
Route::inertia('/contactus','ContactUs')->name('contactus') ;
Route::inertia('/apropos','Propos')->name('apropos') ;

Route::get('/articles', [PostController::class,'index'])->name('articles');

Route::inertia('/catalogue','Catalogue')->name('catalogue') ;
Route::inertia('/formation','Formations')->name('formation') ;
Route::inertia('/home','Home')->name('home') ;;
Route::inertia('/services','Services')->name('services') ;
Route::inertia('/search','SearchPage')->name('search') ;
Route::inertia('/posts','Publication')->name('posts') ;
Route::inertia('/cart','Cart')->name('posts') ;

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
/* ADMINISTRATION */
Route::get('/domaine/list', [DomaineController::class,'index'])->name('domaine.list');
Route::post('domaine.store', [DomaineController::class,'store'])->name('domaine.store');
Route::get('/domaine/edit/{id}', [DomaineController::class,'edit'])->name('domaine.edit');
Route::get('/domaine/add', [DomaineController::class,'create'])->name('domaine.add');
Route::post('/domaine/update  ', [DomaineController::class,'update'])->name('domaine.update') ; 

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
Route::get('/admin/formation/add', [FormationController::class,'create'])->name('formation.add');
Route::post('store', [FormationController::class,'store'])->name('store');
Route::get('/admin/domaine/delete/{id}', [FormationController::class,'destroy'])->name('domaine.delete');
//Post
Route::get('/admin/post/list', [PostController::class,'index'])->name('post.list');
Route::get('/admin/post/add', [PostController::class,'create'])->name('post.add');
Route::post('/admin/post.store', [PostController::class,'store'])->name('post.store');
Route::get('/admin/post/edit/{id}', [PostController::class,'edit'])->name('post.edit');
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
