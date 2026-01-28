# 🔧 Solución a Problemas de Compilación

## Problema Identificado

El proyecto no compila por dos razones:

1. **Swiper.js no está instalado** - El componente `DualSlider` requiere esta librería
2. **Error de permisos de Vite** - Vite no puede crear archivos temporales

## ✅ Solución 1: Instalación Rápida (Recomendado)

Ejecuta estos comandos en tu terminal:

```bash
cd /Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual
chmod +x setup.sh
./setup.sh
```

Luego ejecuta el servidor:

```bash
npm run dev
```

## ✅ Solución 2: Instalación Manual

### Paso 1: Limpiar instalación previa

```bash
cd /Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual
rm -rf node_modules package-lock.json
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Verificar que Swiper se instaló

```bash
ls node_modules/swiper
```

Si no existe, instálalo manualmente:

```bash
npm install swiper --save
```

### Paso 4: Ejecutar el servidor

```bash
npm run dev
```

## ✅ Solución 3: Si persisten problemas de permisos

Si el error `EPERM: operation not permitted` persiste:

### Opción A: Limpiar caché de Vite

```bash
rm -rf node_modules/.vite
npm run dev
```

### Opción B: Cambiar permisos del directorio

```bash
sudo chown -R $(whoami) /Users/lcardenas/Documents/proyectos/v6/shipping/portafolio-audiovisual
npm run dev
```

### Opción C: Usar permisos elevados (último recurso)

```bash
sudo npm run dev
```

## 🐛 Si aún no funciona

### Verificar versión de Node.js

```bash
node -v
```

Debe ser >= 16.0.0. Si no, actualiza Node.js:

```bash
# Con homebrew (macOS)
brew upgrade node

# O descarga desde https://nodejs.org
```

### Verificar que todas las dependencias están instaladas

```bash
npm list
```

Busca errores o paquetes faltantes.

## 📋 Dependencias Necesarias

El proyecto requiere:

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `framer-motion`: ^11.0.0
- `swiper`: ^11.0.0 ⬅️ **ESTA ES LA QUE FALTA**

## 🆘 Última Opción: Deshabilitar DualSlider

Si no puedes instalar Swiper, puedes comentar temporalmente el componente:

### En `src/App.jsx`, comenta estas líneas:

```javascript
// import DualSlider from "./DualSlider";

// Y más abajo:
// <section id="portafolio" style={{ margin: '4rem 0 0 0' }}>
//   <DualSlider />
// </section>
```

Esto permitirá que el proyecto compile sin el slider dual.

## ✅ Verificación Final

Una vez que el proyecto compile, deberías ver:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Si ves este mensaje, ¡el proyecto está funcionando! 🎉
