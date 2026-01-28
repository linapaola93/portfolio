# 📸 Cómo Agregar tus Fotos al Portafolio

## ✅ Cambios Realizados

He actualizado la galería circular (lente de cámara) con estas mejoras:

### 🎯 Configuración Actual

- **Número de imágenes**: Solo 2 (tus fotos)
- **Duración de animación**: 35 segundos (mucho más lenta)
- **Tamaño de imagen**: 120% + escala 1.15 (mucho más grande)
- **Pausa por imagen**: ~10 segundos en pantalla
- **Transición**: Suave y profesional

### 📋 Pasos para Agregar tus Fotos

#### 1. Guarda las Imágenes

Guarda tus dos fotos en la carpeta:
```
/Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual/public/images/
```

Con estos nombres exactos:
- `shooting-day.jpg` - La foto del "Shooting Day - Cortometraje Ficción"
- `camera-work.jpg` - La foto trabajando con la cámara Sony

#### 2. Formato Recomendado

**Tamaño ideal**: 800x800px (cuadrado)  
**Formato**: JPG o PNG  
**Peso máximo**: 500KB por imagen  

Si tus imágenes son muy grandes, puedes redimensionarlas usando:
- **Online**: https://squoosh.app/
- **Mac**: Vista Previa → Herramientas → Ajustar tamaño

#### 3. Actualiza el Código (Opcional)

Si quieres usar tus imágenes locales en lugar de los placeholders, edita:

`src/CircularGallery.jsx` línea 4-13:

```javascript
const images = [
  { 
    src: "/images/shooting-day.jpg",  // ✅ Tu imagen local
    alt: "Shooting Day - Cortometraje Ficción",
    fallback: "https://..." // Se usará si tu imagen no está
  },
  { 
    src: "/images/camera-work.jpg",   // ✅ Tu imagen local
    alt: "Director de Fotografía en set",
    fallback: "https://..." // Se usará si tu imagen no está
  }
];
```

#### 4. Reinicia el Servidor

```bash
# Detén el servidor (Ctrl+C)
# Luego reinícialo:
cd /Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual
npm run dev
```

## 🎨 Personalización Adicional

### Cambiar Velocidad de Rotación

En `src/CircularGallery.css` línea 125:

```css
.gallery {
  --d: 35s;  /* Cambia este valor */
}
```

- `25s` = Más rápido
- `35s` = Actual (recomendado)
- `45s` = Más lento

### Cambiar Tamaño de Imágenes

En `src/CircularGallery.css` línea 151:

```css
.gallery > img {
  width: 120%;  /* Cambia este valor */
  height: 120%;
  margin: -10%; /* Ajusta según el width */
}
```

### Cambiar Tiempo de Pausa

En `src/CircularGallery.css` línea 168:

```css
@keyframes m {
  0%, 10% { ... }      /* Cambia el 10% para más/menos pausa */
  45%, 55% { ... }     /* Cambia el 55% para más/menos pausa */
  95%, 100% { ... }
}
```

## 🔍 Verificación

Después de agregar tus fotos, verifica que:

✅ Las imágenes aparecen en el lente de cámara  
✅ Rotan lentamente (35 segundos por ciclo)  
✅ Se ven grandes y claras  
✅ La transición es suave  

## 🐛 Solución de Problemas

### Las imágenes no aparecen

1. Verifica que los nombres sean exactos:
   - `shooting-day.jpg` (minúsculas, guion)
   - `camera-work.jpg` (minúsculas, guion)

2. Verifica que estén en: `public/images/`

3. Reinicia el servidor con `Ctrl+C` y `npm run dev`

### Las imágenes se ven distorsionadas

- Usa imágenes cuadradas (mismo ancho y alto)
- Tamaño recomendado: 800x800px

### La animación está muy rápida/lenta

- Edita `--d: 35s` en `CircularGallery.css`

## 📊 Especificaciones Técnicas

| Aspecto | Valor Actual |
|---------|--------------|
| Número de imágenes | 2 |
| Duración total | 35 segundos |
| Pausa por imagen | ~10 segundos |
| Tamaño imagen | 120% + scale(1.15) |
| Rotación | 180° entre imágenes |
| Transición | cubic-bezier(0.4, 0, 0.2, 1) |

---

**Última actualización**: Enero 2026  
**Estado**: ✅ Listo para usar
