# Angular 6 certificate course
---
title: HTML/SCSS/Angular6/JS/Bootstrap Components Library 
author:(s) Sam Merante
date: 18-09-24
---

### Section 1
Introduction to angular, TS, Angularjs vs Angular

### Section 2
Components, Directives, Modules, 
String expression binding, 1 way binding, event binding, 2 way binding. 

##### Assignment 1
Component created for alerts, success and warning.
Using inline template and global css styles

##### Assignment 2
2 way binding for entering username and clearing it upon clicking a button through use of event binding. 

##### Assignment 3
Toggle details, loop through array of button history and dynnmically change elements style using ngClass and ngStyle

### Section 3 - Course project


### Section 4
Testing with tool Augury for angular debugging in chrome dev tools

### Section 5
Property binding, with components
Input
Outputs
ViewChilds
View encapsulation
content projection with ng content
ContentChild for getting access to elements inside content projection 
##### Life cycle hooks
constructor() - Called first

ngOnInit() - Called after constructor

ngDoCheck() - Called after initilization of angular component

ngOnChanges(changes: SimpleChanges) - Called if any element changes in component 

ngAfterContentInit() - Called after content is init

ngAfterContentChecked()  - Called after content is init and then checked

ngAfterViewInit() - Called after view initialized ( Gives you access to elements in dom after theyre rendered )

ngAfterViewChecked() - Called after view was checked

ngOnDestroy() - Called when component is destroyed


##### Assignment 4
Game : Increment counter, display odd and even components with content projection and inputs

### Section 6
Course project -- updated component communication between child and sibling comps

- updated shopping list to add ingregients to the shopping list array

- updated recipes to pass selected recipe to recipe details component

### Section 7 Directives

Attribute directives vs Structural Directives

Injecting elements into directives using ElementRef & Renderer2

HostListener for reactive elements based on events (mouseenter/mouseleve)

HostBinding to bind to any property the element has

Can use input to pass data to directives as well with property binding

Using structural directives *ngIf transforms to ng-template [ngIf]=".." behind the scenes

building custom structural directive

 @Input() set unless(condition: boolean){

    if ( !condition ){
	
      this.viewContainer.createEmbeddedView(this.templateRef);
	  
    }else{
	
      this.viewContainer.clear();
	  
    }
	
  }
  

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef){}

  
 Structural directive ngSwitch
<div [ngSwitch]="value">
	<p *ngSwitchCase="5">Value is 5</p>
	<p *ngSwitchCase="10">Value is 10</p>
	<p *ngSwitchCase="100">Value is 100</p>
	<p *ngSwitchDefault>Value is Default</p>
</div>

### Section 8 - Directives

Added directive to toggle menu drop down by adding bootstrap class open.

Removes need to have bootstrap.js and jquery dependency, as only angular should modify the DOM

### Section 9 - Services
Injecting services to create single service instances for apps
providers: [ServiceClass], to provide the service to parent and all children of component OR
To make it global service throughout the app:
		@Injectable({
			providedIn: 'root'
		})  

Service event outputting and subscribing to listen to application wide events and data.

Service assignment - adding service to listen to its own events being emitted and storing app wide data.

### Section - 10 - Services in course project
Added recipe service to store all data for recipes including ingredients

Shopping list service to add ingredients and hold data for all ingredients across the application

### Section 11 - Routing
Routing : Relative paths : 'servers', global path: '/servers'
routerLinkActive="className" to specify whichever link is active

[routerLinkActiveOptions] = "{exact: true}" to match exact link

Navigate programtically: this.router.navigate(['/servers'])
this.router.navigate(['servers'], {relativeTo: this.route});

To get params of the url ==> id: this.activatedRoute.snapshot.params['id'],

For queryParams and fragments this.router.navigate(['/servers',id,'edit'],{queryParams: {allowEdit: '1'}, fragment: 'loading'});

        [routerLink]="['/servers', server.id]"
        [queryParams]="{allowEdit: '1'}"
        [fragment]="'loading'"

To implement child routing: 
in HTML provide another router-outlet and in routes add: 

children: [
      { path: ':id' , component:  ServerComponent },
      { path: ':id/edit' , component:  EditServerComponent },
] 


To preserve queryParams when changing routes : 
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});

Redirecting to 404 if page not in routes array: 

  { path: '**' , redirectTo: 'not-found' }
  
Exporting routing to a seperate module: 

        import { NgModule } from '@angular/core';
        import { HomeComponent } from './home/home.component';
        import { UsersComponent } from './users/users.component';
        import { ServersComponent } from './servers/servers.component';
        import { UserComponent } from './users/user/user.component';
        import { EditServerComponent } from './servers/edit-server/edit-server.component';
        import { ServerComponent } from './servers/server/server.component';
        import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
        import { Routes, RouterModule } from '@angular/router';
        
        const appRoutes: Routes = [
          { path: '' , component:  HomeComponent },
          { path: 'not-found' , component:  PageNotFoundComponent },
          { path: 'users' , component:  UsersComponent, children:[
            { path: ':id/:name' , component:  UserComponent },
          ]},
          { path: 'servers' , component:  ServersComponent,
            children: [
              { path: ':id' , component:  ServerComponent },
              { path: ':id/edit' , component:  EditServerComponent },
            ] 
          },
          { path: '**' , redirectTo: 'not-found' }
         ];
        
        @NgModule({
          imports: [
            RouterModule.forRoot(appRoutes)
          ],
          exports: [RouterModule]
        })
        export class AppRoutingModule{
        
          
        }

For implmenting routing navigation gaurding: 
 
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.authService.isAuthenticated()
          .then(
            (authenticated: boolean) => {
              if (authenticated)
                return true;
              else
                this.router.navigate(['/']);
            }
          )
          return false;
      }
  
To control all front end nav useHAsh in routerModule.forRoot will cause anything before the hash tag
    RouterModule.forRoot(appRoutes, {useHash: true})

### Section 13 - Observables

    const myObservable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('first package')
      }, 2000);
      setTimeout(() => {
        observer.next('second package')
      }, 4000);
      setTimeout(() => {
        observer.complete()
      }, 5000);
      setTimeout(() => {
        observer.next('third package')
      }, 6000);
    });
    myObservable.subscribe(
      (data: String) => {console.log('data: ' ,data)},
      (error: String) => {console.log('error: ', error)},
      () => {console.log('completed')},
    );
	
Clean up observables in ngOnDestroy()
        
    this.myNumbersObservable = myObservable.subscribe(
      (data: String) => { console.log('data: ', data) },
      (error: String) => { console.log('error: ', error) },
      () => { console.log('completed') },
    );
    }

    ngOnDestroy() {
    this.myNumbersObservable.unsubscribe();
    }


Use Subject for cross component communication, in a service 
Subjects: Observables and observers

  
### Section 14(15) -- Forms
Template driven forms
    
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
For every input have ngModel and name="..."
btn type="submit"

Another way of keeping track of the form at any given time : 
    
    @ViewChild('f') form: NgForm;

Directives for validity: 
        required
        email

Go to https://angular.io/api/forms/Validators  for list of validators

Inline error messages with Template driven validation
		  
		  <label for="email">Mail</label>
			<input 
			ngModel
			name="email"
			required
			email
			type="email" 
			id="email" 
			#email="ngModel"
			class="form-control">

		<span *ngIf="email.invalid &&  email.touched" class="help-block">Please enter a valid email</span>
				  
				  
		To set default value for select dropdown set the ngModel to a variable matching the value of one of the options:

		defaultQuestion='pet'

		[ngModel]="defaultQuestion"
		<option value="pet">Your first Pet?</option>

		To group form controls: 
		<div id="user-data" ngModelGroup="userData">
		or 
		<div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
					
Helper methods for form filling:
this.signupForm.form.patchValue({
      userData:{ userName: suggestedName}
    });
	
### Forms Reactive Approach

Need ReactiveFormsModule in app module 
and FormGroup in the component:

    signUpForm: FormGroup;
  
  To initialize a basic form: 
  Component:
  
    this.signUpForm = new FormGroup({
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });

HTML: 
    
    <form [formGroup]="signUpForm" >
     
    <input formControlName="userName" type="text" id="username" class="form-control">

To add validation in the reactive form control group: 
   
    'userName': new FormControl(null, Validators.required),
    'email': new FormControl(null,[Validators.required, Validators.email]),
      
To get validation HTML: 
 
    <span *ngIf="signUpForm.get('userName').invalid && signUpForm.get('userName').touched"
            class="help-block">Please enter a valid username</span>

Nested Form:

     this.signUpForm = new FormGroup({
          'userData': new FormGroup({
            'userName': new FormControl(null, Validators.required),
            'email': new FormControl(null,[Validators.required, Validators.email]),
          }),
         'gender': new FormControl('male')
        });
HTML:
Need to wrap controls in a group: 
	
		<div formGroupName="userData">
		....
		</div>

For Nested form groups and controllers: 

    <span *ngIf="signUpForm.get('userData.email').invalid && 
    
    signUpForm.get('userData.email').touched" class="help-block">Please
              enter a valid email</span>
        

To create a form Array

    'hobbies': new FormArray([])

HTML:
		
		<div *ngFor="let h of signUpForm.get('hobbies').controls; let i = index;" class="form-group">
		  <input type="text" class="form-control" [formControlName]="i" />
		</div>


To create a validator: 
      
      blackList(control: FormControl): { [s: string]: boolean } {
        if(this.blacklistUserNamed.indexOf(control.value)){
          return {'blackListed': true};
        }
        return null;
      }

  
    'userName': new FormControl(null, [Validators.required, this.blackList.bind(this)]),

To check for specefic error in html: 

    <span *ngIf="signUpForm.get('userData.userName').errors['blackListed']">
    User name is not valid<br/>
    </span>

Adding Async validators:

		 blackListEmail(control: FormControl): Promise<any> | Observable<any> {
			const promise = new Promise<any>((resolve, reject) => {
			  setTimeout(() => {
				if (control.value === 'test@gmail.com') {
				  resolve({ 'blackListed': true });
				} else {
				  resolve(null);
				}
			  }, 1500)
			});
			return promise;
		  }


 To watch what happens to the form or individual controlls: 
		 
		this.signUpForm.valueChanges.subscribe(
		  (value) =>{
			console.log(value);
		  }
		)

		this.signUpForm.statusChanges.subscribe(
		  (status)=>{
			console.log(status);
		  }
		)

Assignment: 

		<div class="container">
		  <div class="row">
			<div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
			  <form (ngSubmit)="onSubmit()" [formGroup]="projectForm">
				<div formGroupName="projectData">
				  <div class="form-group">
					<label for="projectName">Project Name</label>
					<input formControlName="projectName" type="text" id="projectName" class="form-control">
					<span *ngIf="projectForm.get('projectData.projectName').invalid && projectForm.get('projectData.projectName').touched"
					  class="help-block">
					  projectName required</span>
				  </div>
				  <div class="form-group">
					<label for="email">email</label>
					<input formControlName="email" type="text" id="email" class="form-control">
					<span *ngIf="projectForm.get('projectData.email').invalid && projectForm.get('projectData.email').touched"
					  class="help-block">Please
					  enter a valid email</span>
				  </div>
				</div>

				<div class="form-group">
				  <label for="statusDropdown">Project Status</label>
					<select id="statusDropdown" formControlName="status" class="form-control" >
					  <option *ngFor="let status of statusSelection;" [value]="status">{{status}}</option>
					</select>
				</div>
				<span *ngIf="projectForm.invalid && projectForm.touched" class="help-block">Please enter valid data</span>
				<button class="btn btn-primary" type="submit">Submit</button>
			  </form>
			</div>
		  </div>
		</div>

Component: 

		import { Component, OnInit } from '@angular/core';
		import { FormGroup, FormControl, Validators } from '@angular/forms';
		import { Observable } from 'rxjs';

		@Component({
		  selector: 'app-root',
		  templateUrl: './app.component.html',
		  styleUrls: ['./app.component.css']
		})
		export class AppComponent implements OnInit {
		  projectForm: FormGroup
		  statusSelection: string[];

		  ngOnInit(): void {
			this.projectForm = new FormGroup({
			  'projectData': new FormGroup({
				'projectName': new FormControl(null, [Validators.required, this.blackList],this.asyncBlackList),
				'email': new FormControl(null, [Validators.required, Validators.email])
			  }),
			  'status': new FormControl(null)
			});
			this.statusSelection = ['Stable', 'Critical', 'Finished'];
		  }

		  blackList(control: FormControl): { [s: string]: boolean } {
			if (control.value === 'Test' || control.value === 'test') {
			  return { 'blackListed': true };
			}
			return null;
		  }

		  asyncBlackList(control: FormControl): Promise<any> | Observable<any> {
			const promise = new Promise<any>((resolve, reject) => {
			  setTimeout(() => {
				if (control.value === 'Test1' || control.value === 'test1') {
				  resolve({ 'blackListed': true });
				}
				resolve(null);
			  }, 1500)
			});
			return promise;
		  }
		  

		  onSubmit() {
			console.log(this.projectForm);
		  }
		}



### Section 16 - Course project forms
Made shopping list edit component use a form (TD approach)

Create another observable in shopping list service for items we're editing with the form

Setup for passing edited item to shopping-list-edit:

		this.subscription = this.slService.startedEditing.subscribe(
		  (index: number) => {
			this.editMode = true;
			this.editIndex = index;
			this.editedItem = this.slService.getIngredient(index);
			this.shoppingForm.setValue(
			  {
				name: this.editedItem.name,
				amount: this.editedItem.amount
			  }
			)
		  }
		)


    form.reset(); 
	To clear item
	
Reactive forms for new recipe or editing existing one

If a formGroup matches a class defined you can set it without defining a new variable
    
			const newRecipe = new Recipe(
			  this.recipeForm.value['name'],
			  this.recipeForm.value['description'],
			  this.recipeForm.value['imagePath'],
			  this.recipeForm.value['ingredients']
			);
			if(this.editMode){
			  this.recipeService.updateRecipe(this.id,newRecipe);
			}else{
			  this.recipeService.addRecipe(this.recipeForm.value); 
			  

Form Arrays: 

			let recipeIngredients = new FormArray([]);
			recipeIngredients.push(
			new FormGroup({
				  'name': new FormControl(ingredient.name, [Validators.required]),
				  'amount': new FormControl(ingredient.amount, [Validators.required,
				  Validators.pattern('^[1-9]+[0-9]*$')])
				})
			);

			<div class="col-xs-12" formArrayName="ingredients">
			  <div class="row" 
			  *ngFor="let ing of recipeForm.get('ingredients').controls; let i = index;" 
			  [formGroupName]="i"
			  style="margin-bottom: 10px">
				<div class="col-xs-7">
					<input type="text" formControlName="name" class="form-control">
				</div>
				
To navigate one level up:


		this.router.navigate(['../'], {relativeTo: this.route});

		constructor( private route: ActivatedRoute,
		private router: Router)

### Section 17 Pipes

	import { PipeTransform, Pipe } from "@angular/core";

	@Pipe(
	{
		name: 'shorten'
	})
	export class ShortenPipe implements PipeTransform {
		transform(value: string, limit: number) {
			if(value.length > limit){
				return value.substr(0, limit) + '...';
			}else{
				return value;
			}
		}
	}

	import { Pipe, PipeTransform } from '@angular/core';

	@Pipe({
		name: 'filter',
		pure: false
	})
	export class FilterPipe implements PipeTransform {

		transform(value: any, filterString: string, propName: string): any {
			if(value.length === 0 || filterString === ''){
				return value;
			}
			const resultArray = [];
			for(const item of value){
				if(item[propName] === filterString){
					resultArray.push(item);
				}
			}
			return resultArray;
		}

	}


### Section 17 Pipes -- Asignment
Sort Pipe: 
		
		import { Pipe, PipeTransform } from '@angular/core';

		@Pipe({
			name: 'sort'
		})
		export class SortPipe implements PipeTransform {

			transform(value: Array<any>): any {
				let sortedArray = value.sort((a: any, b: any) => {
					if (a.name < b.name) {
						return -1;
					}
					return 1;
				});
				return sortedArray;
			}
		}

Reverse Pipe:
		
		import { Pipe, PipeTransform } from '@angular/core';

		@Pipe({
			name: 'reverse'
		})
		export class ReversePipe implements PipeTransform {

			transform(value: string): any {
				let valueSplit = value.split('');
				let reversed = valueSplit.reverse();
				return reversed.join('');
			}

		}

### Section 18 HTTP Requests
Using Http class for now:
		With test database on googles firebase db I made

http functions return observables that you have to subscribe to, to actually make the call
		
	    storeServers(servers: any[]){
      return this.http.post('https://udemy-ng-http-ddb9d.firebaseio.com/data.json',servers);
  }
	  
	onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });}

To set headers

        const mHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-ddb9d.firebaseio.com/data.json', 
        servers, 
        {headers: mHeaders});

To get data from the DB

		onGet() {
    this.serverService.getServers()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      );}
To update data in the firebase DB instead of append it use PUT request

To map the HttpResponse to readable data you can use RxJs functions

		return this.http.get('https://udemy-ng-http-ddb9d.firebaseio.com/data.json')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
      );

To map an error response of an http call: 

		.pipe(...,
        catchError(
          (error: any) => {
            return throwError('something went wrong: '+ error);
          }
        )
		)

To get data using async pipe in template:

template:

		<h1>{{appName | async}}</h1>
		
component:

  	appName = this.serverService.getAppName();

service:

		getAppName(){
    return this.http.get('https://udemy-ng-http-ddb9d.firebaseio.com/appName.json')
    .pipe(
      map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
    );}


### Section 19 Fetching and saving recipes

Adding ability to save and fetch recipes from DB

In order to use recipe service or any service in another service it needs to be provided in the app module:

		import { RecipeService } from '../recipe/recipe.service';


			providers: [RecipeService],

made a new data service to save and fetch recipes

		storeRecipes() {
			return this.http.put('https://ng-recipe-book-afab5.firebaseio.com/recipes.json', this.recipeService.getRecipes());
		}

		fetchRecipes() {
			return this.http.get('https://ng-recipe-book-afab5.firebaseio.com/recipes.json')
				.pipe(
					map(
						(response: Response) => {
							const recipes: Recipe[] = response.json();
							for (let recipe of recipes) {
								if (!recipe['ingredients']) {
									recipe['ingredients'] = [];
								}
							}
							this.recipeService.replaceRecipes(recipes);
							return recipes;
						}
					)
				);

### Section 20 - Authentication and route protection

Only allow signed in users to create recipes or fetch recipes from the server

Authentication works by sending a sign in request to a backend server and recieving a hashed token(secret) back in the response, then that token is saved in the session and the same token is sent back to the server and checked again to make further requests possible that require authentication.

The following page should be helpful: https://jwt.io/ - specifically, the introduction: https://jwt.io/introduction/

Created a simple form for signing up with email and password: 

Step 1 firebase SDKs and TS libraries: 

		npm install --save firebase 

Step 2 loading the app component onInit:

	import * as firebase from 'firebase';

	firebase.initializeApp({
      apiKey: "AIzaSyAT2mNclO9GNrJJLRcg_edr7y5FAMeD8Wc",
      authDomain: "ng-recipe-book-afab5.firebaseapp.com"
    })

Step 3 signin and signup users:

		signupUser(email: string, password: string) {
    console.log('signing up user : ' + email);
    //this is a promise so you can listen with .then
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        data => {
          console.log(data);
          return data;
        }
      );
  }

		signInUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log('signin success: ');
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );
        }
      );
  }

Template:

		<form (ngSubmit)="onSignup(f)" #f="ngForm">
			<div class="form-group">
				<label for="email">Email</label>
				<input class="form-control" type="email" id="email" name="email" ngModel>
				<label for="password">Password</label>
				<input class="form-control" type="password" id="password" name="password" ngModel>
			</div>
			<button class="btn btn-primary" type="submit">Sign Up</button>
		</form>

Component:

	onSignup(form: NgForm) {
		const email = form.value.email;
    const password = form.value.password;
    this.errorMessage = '';
    this.authService.signupUser(email,password)
    .catch(
      (error: Error) => {
        if(error['message']){
          this.errorMessage = error['message'];
        }
      }
    );
	}

To make authenticated requests: Normally you have to retrieve the token and send it back for the next requests after signin, however firebase has a service call for retrieving the token if user is signed in.

		firebase.auth().currentUser.getIdToken()
			.then(
				(token: string) => {
					this.token = token;
				}
			);

Then to send it back in further requests to the DB

		const token = this.authService.retrieveToken();


    return this.http.get('https://ng-recipe-book-afab5.firebaseio.com/recipes.json?auth='+token)

To display certain things when logged in :

template:

		*ngIf="authService.isAuthenticated()"

Component: 

		private authService: AuthService

To logout: 

		logout(){
    firebase.auth().signOut();
    this.token = null;
  }

Routing gaurds and redirect after logging in
After signing in in auth service just redirect using anuglars Router:

			this.router.navigate(['/']);

			import { Injectable } from '@angular/core';
		import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
		import { Observable } from 'rxjs';
		import { AuthService } from './auth.service';

		@Injectable({
			providedIn: 'root'
		})
		export class AuthGuardService implements CanActivate {
			constructor(private authService: AuthService){}
			
			canActivate(route: ActivatedRouteSnapshot,
				state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
				return this.authService.isAuthenticated();
			}

		}

And in any route you want to check this auth gaurd:

		{path: 'new', component: RecipeEditComponent, canActivate:[AuthGuardService] },


### Section 21 - Modules and optimizing apps

Every import we use is a typescript feature used to find files, webpack uses it to package apps in the end.
Angular modules define what our app looks like to angular.

We'll group recipes together into one feature module.

Creating recipes module:

	@NgModule({
		declarations: [
			RecipeComponent,
			RecipeStartComponent,
			RecipeListComponent,
			RecipeEditComponent,
			RecipeDetailComponent,
			RecipeItemComponent,
		],
		imports: [ 
			CommonModule, //Gives access to common directives, ng-class, ng-for, ng-if
			ReactiveFormsModule,
			RecipesRoutingModule // Need to create seperate routing for a module that has nested router-outlet directive
		]
		})
		export class RecipesModule{}

			const recipeRoutes: Routes = [
			{
				path: 'recipes', component: RecipeComponent,
				children: [
					{ path: '', component: RecipeStartComponent },
					{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
					{ path: ':id', component: RecipeDetailComponent },
					{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
				]
			},
		];

		@NgModule({
			imports: [//must only call forRoot in your app module, anywhere else you must use for child
				RouterModule.forChild(recipeRoutes)
			],
			exports: [RouterModule]
		})
		export class RecipesRoutingModule {}

To make dropdown directive available throughout app, header and recipe detail edit component, we need to put it in a shared module. 

Imports array is for using modules in your component
Exports array is used for sharing types with other components. 

Created module for shopping list, and signin/singup components, and a shared module.

	@NgModule({
			declarations: [
				DropdownDirective,
			],
			exports: [ //To make things accessible from elsewhere you need to export them
				CommonModule, // You dont need to import modules to share them
				DropdownDirective
			]
		})
		export class SharedModule{}

##### Eager loading

*Loading eagerly: Everything listed in imports in the app module will be loaded when the app bootstraps*

 This is not very effecient and can be fixed with lazy loading

##### Optimization using Lazy Loading:

Lazy loading only loads the module if we visit a route loading on one of the modules RouterModule routes.


Steps to lazy loading:

1. Make sure each module has its own set of routes:

			@NgModule({
			declarations: [... ],
			imports : [...
				RecipesRoutingModule
			]
		})
export class RecipesModule {}

2. Use loadChildren in the main app module routes array pointing to the module file#ClassName:
  
		{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}


and then  update the path from '/route' to be blank because its already lazy loaded from /route in main app modules routes:

		const recipeRoutes: Routes = [
			{ path: '', component: RecipeComponent,}
		];

3. Make sure the module thats being lazy loaded is removed from main app modules imports array

4. If you want auth protection on lazy loaded modules:

You can enforce this behavior by adding the canLoad  guard to the route which points to the lazily loaded module:

			{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] } 

		In this example, the AuthGuard  should implement the CanLoad interface.

If you want to use lazy loading for services then the service will be a seperate and different instance that will load on loading the component. 

You should never provide a service in shared modules.

##### Core Modules

You can clean up and structure the main app module better by creating a core module to eagerly load any components or services needed in the bootstrap of the app:

		@NgModule({
			declarations: [
				HeaderComponent,
				HomeComponent,
			],
			imports: [
				SharedModule,
				AppRoutingModule
			],
			exports:[
				AppRoutingModule,
				HeaderComponent
			]
		})
		export class CoreModule { }


##### Providing Services more effectively

Move providers to core module, which will still provide a single global instance of the service as long as core module is loaded eagerly

If you use a service only in one component you can provide it only in that component and use it lazily, i.e. our AuthService

##### (AoT) Ahead-of-Time Compilation

We allow angular to parse and compile the templates after development.

1. Faster startup as it's not compiled in the browser

2. Templates get checked after development before deploying to production

3. Much smaller file size, unused features or code is stripped out and scripts are minified.

ng build --prod --aot : you dont need --aot anymore because its done automatically with --prod flag

##### Pre loading the lazy loaded features

In your main app modules RouterModule you can add an option to preload modules after loading your main core modules:

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})

### Section 22 - Deploying an Angular App

####### Deployment Steps:

1. Minify and remove unused code: ng build --prod 
2. if you're serving your app on a nested path like /my-app you need to adjust <base href="/my-app/">  for the angular router to work correctly
3. Configure your Server to always returns the index.html file that way atleast angular app can take over and render a 404 or error page. 

Deployed application using AWS here: http://sam-ng-recipe-book.s3-website.ca-central-1.amazonaws.com/


### Section 23 - HTTP update as of latest angular

Update app modules to import :

		HttpClientModule

The default setup is to return only the body which is assumed to be JSON data.

The calls remain the same but with some new features, like not having to manually extract the body of the response. Then when making requests you can infer specific types:

		return this.httpClient.get<Recipe[]>

We can override the defaults by passing through options:

		{
			observe: 'response',
			responseType: 'text'
		}

you can listen to events to wait for the response type

		observe: 'event'

		subscribe( (event: HttpEvent)=>console.log(event) )

You can also send headers:

       headers: new HttpHeaders().set('Authorization',token).append('...')

Also with querry params:

      params: new HttpParams().set('auth',token)



Can also setup with http request:

		const req = new HttpRequest('PUT', 'https://ng-recipe-book-afab5.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), { reportProgress: true, params: new HttpParams().set('auth',token) });
    return this.httpClient.request(req);

When we log the responses we get the request sent 0, upload event 1, headers response event 2, download progress event 3, normal http response 4

Interceptors:

		export class AuthInterceptor implements HttpInterceptor{
			intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
				console.log('intercepting: ' + req);
				return next.handle(req);
			}
		}

  	{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}], //Instead of using @Injector({providedIn: 'root'}), also provides one of the same instance


Modifying intercepted requests:

		@Injectable()
		export class AuthInterceptor implements HttpInterceptor{

			constructor(private authService: AuthService){}

			intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
				
				const token = this.authService.retrieveToken();
				let updateReq = req.clone({
					params: req.params.append('auth',token)
				});

				console.log('intercepting: ' , updateReq);
				return next.handle(updateReq);
			}
		}

To intercept the responses:

			@Injectable()
	export class LoggingInterceptor implements HttpInterceptor{

		constructor(private authService: AuthService){}

		intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
			
			return next.handle(req)
			.pipe(
				tap(
					event => {
						console.log('Logging interceptor: ', event);
					}
				)
			);
		}
        
        
### RXJS Subject and map example

     people: PersonalInfo[];
      peopleObserverable: Subject<PersonalInfo>;

      constructor() {
        this.people = [
          {
            firstName : 'Adam',
            lastName: 'Eve'
          },
          {
            firstName : 'John',
            lastName: 'Doe'
          },
          {
            firstName : 'James',
            lastName: 'Smith'
          },
        ];
        this.peopleObserverable = new Subject<PersonalInfo>();
    
        this.peopleObserverable.pipe(
          filter( (value: PersonalInfo, index: number) => {
              return value.firstName === 'Adam'
          }),
          map((value: PersonalInfo) => {
              value = {
              firstName : value.firstName,
              middleName: 'Chosen',
              lastName : value.lastName,
              };
              return value;
            }
          )
        ).subscribe(
          (value: PersonalInfo) => {
            console.log(value);
          }
        );
    
       }

      ngOnInit() {
        for(let p of this.people){
          this.peopleObserverable.next(p);
        }
        this.peopleObserverable.complete();
      }
  