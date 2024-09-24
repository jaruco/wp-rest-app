# Anotaciones Ejercicio Práctico

## 1. Código del repositorio

El código de solución se encuentra en [github](https://github.com/jaruco/wp-rest-app).

## 2. Definición Open Api

El archivo .yml de definición está en la carpeta [__/docs__](https://github.com/jaruco/wp-rest-app/blob/development/docs/openapi.yaml) del repositorio:

## 3. Base de datos

*Se puede generar las tablas necesarias para el esquema de base de datos ejecutando el script en __/utilities/SyncDB.js__ realizando la configuración previa de credenciales en el archivo __config/SyncDatabase.js__*

* Creación de tabla de base de datos:
```
    CREATE TABLE articulos (
        id VARCHAR(10) NOT NULL,
        nombre VARCHAR(20) NOT NULL,
        descripcion VARCHAR(200),
        precio DECIMAL(10, 2) NOT NULL,
        modelo VARCHAR(10),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    );
```

* Data de ejemplo para testing:
```
    INSERT INTO articulos (id, nombre, descripcion, precio, modelo) VALUES
        ('ART0000001', 'Laptop Pro', 'Laptop de alto rendimiento con 16GB RAM y 512GB SSD.', 1200.00, 'LPX-2023'),
        ('ART0000002', 'Smartphone X', 'Smartphone con pantalla OLED de 6.5 pulgadas y cámara de 64MP.', 799.99, 'SMX-10'),
        ('ART0000003', 'Tablet Plus', 'Tablet ligera con pantalla de 10 pulgadas y 128GB de almacenamiento.', 499.99, 'TPL-128'),
        ('ART0000004', 'Auriculares ANC', 'Auriculares con cancelación de ruido activa y batería de larga duración.', 199.99, 'ANC-X20'),
        ('ART0000005', 'Monitor 4K', 'Monitor 4K UHD de 27 pulgadas con HDR y puertos HDMI/USB-C.', 350.50, 'MN4K-27'),
        ('ART0000006', 'Teclado Mecánico', 'Teclado mecánico retroiluminado RGB con interruptores táctiles.', 89.99, 'KBM-RGB'),
        ('ART0000007', 'Reloj Inteligente', 'Reloj inteligente con GPS, monitor de ritmo cardíaco y resistencia al agua.', 150.00, 'SW-42MM'),
        ('ART0000008', 'Cámara DSLR', 'Cámara DSLR con sensor de 24.1 MP, grabación en 4K y lente de 18-55mm.', 1100.75, 'DSLR-5500'),
        ('ART0000009', 'Smart TV 55"', 'Smart TV LED 55 pulgadas con soporte para aplicaciones de streaming.', 650.00, 'TV55-SM'),
        ('ART0000010', 'Consola de Juegos', 'Consola de videojuegos de nueva generación con soporte para 8K.', 499.99, 'CNS-8KX');
```

## 4. Servicios AWS

* Se considera requisito inicial tener una cuenta nueva en AWS, con los servicios del free tier, luego seguir las indicaciones del [enlace](https://docs.aws.amazon.com/opsworks/latest/userguide/customizing-rds-connect-create.html).

* Configurar los datos de conexión en nuestro cliente de base de datos de confianza [DBeaver](https://dbeaver.io/) en este caso.

## 5. Evidencia funcionamiento

![This is an alt text.](/docs/getAll.jpg "GET endpoint")
