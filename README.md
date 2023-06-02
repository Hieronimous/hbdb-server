# HBDB
The hebrew bible data base

## Endpoints

### Auth

Base URL/auth

| HTTPS | URI PATH | DESCRIPTION | 
|-------|------|-------------|
| GET | `/login`| Log in |
| POST | `/login`| auth login |
| GET | `/register`| form register |
| POST | `/register `| create User |
| GET | `/profile `| View profile |
| GET | `/edit/profile/:id`| render profile  |
| PUT | `/edit/profile/:id`| edit profile |
| DELETE| `/edit/profile/:id`| edit profile |
| GET | `/myPage/:id`| main page with my favorites bibles |


### BIBLES

Base Url/bibles

| HTTPS | URI PATH | DESCRIPTION | 
|-------|------|-------------|
| GET	| `/bibles`|	All the bibles list | 
| GET	| `details/:id`|	bible detail | 
| GET	| `/libraries`|	All the libraries list |
| GET	| `/countries`|	All the countries list |
| GET	| `/favorites`|Favorites bibles |
| GET	| `/creatPost`| form-create bible |
| POST | `/creatPost`	| creat event |
| GET	| `/edit/:id`| edit bible |
| PUT | `/edit/:id`| edit bible |
| DELETE | `/delete/:id`| delete bible |

### COLABORATOS
| GET	| `/colaborators`|	Colaborators list |

### FBCOMUNITY

| HTTPS | URI PATH | DESCRIPTION | 
|-------|------|-------------|
| GET | `/comunity`| check the post from the facebook comunity |# hbdb-server
