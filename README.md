# Nutrihealth

## Endpoints del projecto (base)

### Servidor
id | Method | Path  | Description
-- | ------ | ------ | ----------
1 | get | / | Pagina principal 
2 | get | /profile | Pagina del usuario 
3 | post | /signup	| Te regsitra en la pagina (base de datos)
4 | post | /login | Te hacer log-in en la pagina
5 | post | /logout | Te hacer log-out de la pagina
6 | get | /loggedin | Estás logueado?


### Cliente
id | Method | Path  | Description
-- | ------ | ------ | ----------
1 | get | /signup	| Te muestra el form de sing-up
2 | get | /login | Te muestra el log-in de la pagina
3 | get | /choose-plan | Te muestra free o premium
4 | get | /free | Te muestra los checkbox de free
5 | post | /free | Te envia los datos de los checkbox a la api
6 | get | /free/results | Te recibe los datos del menú semanal
7 | get | /premium | Te muestra los datos de los nutricionistas asociados
8 | post | /premium | Te envia las preferencias del usuario al nutricionista
9 | get | /premium/results | Recibe los datos enviados por el nutricionista
10 | get | /premium/nutri | Muestra la recepcion de informacion en la vista del nutricionista
11 | post | /premium/nutri | Envia los datos del nutricionista al usuario  



## Modelos

### Modelo de usuario

```
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  photo: String,
  userRecipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }]
  role: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
```

### Modelo de recetas

```
const recipeSchema = new Schema({
    recipe: String,
    ingredients: [String],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

