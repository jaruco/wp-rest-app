### Script to create the table structure for 'articulos'

```
    CREATE TABLE articulos (
    id VARCHAR(10) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10, 2) NOT NULL,
    modelo VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );

```
### Sample data

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
