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
| GET | `/myPage/:id`| main page with my favorite bibles |


### BIBLES

Base Url/bibles

| HTTPS | URI PATH | DESCRIPTION | 
|-------|------|-------------|
| GET	| `/bibles`|	All the bibles list | 
| GET	| `details/:id`|	bible detail | 
| GET	| `/favorite`|Favorite bibles |
| GET	| `/new-entry`| form-create bible |
| POST | `/everybody`	| list of all the users|
| GET	| `/edit/:id`| edit bible |
| PUT | `/edit/:id`| edit bible |
| DELETE | `/delete/:id`| delete bible |

| HTTPS | URI PATH  | DESCRIPTION  |
|-------------|----------------------------------|----------------------------------|
| GET         | `/collaborators`                  | Get the list of collaborators    |
| GET         | `/collaboratorDetails/:user_id`  | Get details of a collaborator    |
| GET         | `/mycollaborations`              | Collaborator's contributions |
