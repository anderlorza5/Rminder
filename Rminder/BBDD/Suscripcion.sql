-- Create a new table called '[Suscripcion]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Suscripcion]', 'U') IS NOT NULL
DROP TABLE [dbo].[Suscripcion]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Suscripcion]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, -- Primary Key column
    [Id_usuario] INT NOT NULL,
    [Nombre] NVARCHAR(50) NOT NULL,
    [Categoria] NVARCHAR(50) NOT NULL,
    [Imagen] NVARCHAR(100) NOT NULL,
    [FechaVencimiento] DATETIME2 NOT NULL,
    [Precio] FLOAT NOT NULL
    -- Specify more columns here
);
GO
