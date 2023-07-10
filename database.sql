-- payment_method

INSERT INTO payment_method VALUES (1, 'Efectivo',  now(), now());
INSERT INTO payment_method VALUES (2, 'Debito',  now(), now());
INSERT INTO payment_method VALUES (3, 'Credito',  now(), now());
INSERT INTO payment_method VALUES (4, 'Mercado Pago',  now(), now());

-- document_type

INSERT INTO document_type VALUES (33, 'Factura Electronica',  now(), now());
INSERT INTO document_type VALUES (39, 'Boleta Electronica',  now(), now());
INSERT INTO document_type VALUES (99, 'Sin Documento',  now(), now());