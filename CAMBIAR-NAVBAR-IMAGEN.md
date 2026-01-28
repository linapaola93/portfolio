# 📸 Cómo Cambiar la Imagen de Fondo del Navbar

## 🎯 Ubicación del Archivo

Edita: `src/Hero.css`

## 🖼️ Paso 1: Guardar tu Imagen

1. Guarda tu imagen del logo "SANTICF_FILM" en: 
   ```
   public/images/navbar-bg.jpg
   ```

2. O puedes usar cualquier nombre, por ejemplo:
   ```
   public/images/santicf-logo.jpg
   ```

## ✏️ Paso 2: Actualizar el CSS

En `src/Hero.css`, busca la línea 4 y cambia la URL:

### Opción A: Usar imagen local
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), 
              url('/images/navbar-bg.jpg');  /* ← CAMBIA AQUÍ */
  background-size: cover;
  background-position: center;
  ...
}
```

### Opción B: Usar imagen de internet
```css
.navbar {
  ...
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), 
              url('https://tu-imagen.com/logo.jpg');  /* ← CAMBIA AQUÍ */
  ...
}
```

## 🎨 Paso 3: Ajustar el Overlay (Opcional)

Si quieres que la imagen se vea más o menos oscura, ajusta el `linear-gradient`:

### Más oscuro (mejor para leer texto)
```css
background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), 
            url('/images/navbar-bg.jpg');
```

### Más claro (imagen más visible)
```css
background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), 
            url('/images/navbar-bg.jpg');
```

### Sin overlay (imagen totalmente visible)
```css
background: url('/images/navbar-bg.jpg');
background-size: cover;
background-position: center;
```

## 📐 Paso 4: Ajustar el Tamaño (Opcional)

Si la imagen se ve cortada o estirada, puedes ajustar:

### Cubrir todo el navbar
```css
background-size: cover;  /* Cubre todo el espacio */
background-position: center;  /* Centra la imagen */
```

### Contener toda la imagen
```css
background-size: contain;  /* Muestra toda la imagen */
background-position: center;  /* Centra la imagen */
background-repeat: no-repeat;  /* No repetir */
```

### Posicionar en una esquina
```css
background-position: left center;  /* Izquierda centro */
/* O */
background-position: right center;  /* Derecha centro */
```

## 🔄 Paso 5: Actualizar para Estado Sticky

No olvides actualizar también la línea 17 para el navbar sticky (cuando haces scroll):

```css
.navbar.nav-sticky {
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), 
              url('/images/navbar-bg.jpg');  /* ← CAMBIA AQUÍ TAMBIÉN */
  background-size: cover;
  background-position: center;
  ...
}
```

## ✅ Paso 6: Verificar

1. Guarda los cambios
2. El navegador se actualizará automáticamente (HMR)
3. Verifica que la imagen se vea bien

## 💡 Consejos

- **Resolución recomendada**: 1920x200px
- **Formato**: JPG o PNG
- **Peso**: Menos de 200KB para carga rápida
- **Contraste**: Asegúrate de que el texto se lea bien sobre la imagen

## 🎬 Ejemplo con tu Logo

Si tu imagen del logo "SANTICF_FILM" está en `public/images/santicf-logo.jpg`:

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), 
              url('/images/santicf-logo.jpg');
  background-size: cover;
  background-position: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar.nav-sticky {
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), 
              url('/images/santicf-logo.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
```

¡Listo! Tu navbar tendrá tu logo de fondo con el menú superpuesto. 🎨✨
