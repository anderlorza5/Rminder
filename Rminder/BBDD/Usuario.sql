-- Create a new table called '[Usuario]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Usuario]', 'U') IS NOT NULL
DROP TABLE [dbo].[Usuario]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Usuario]
(
    [Id] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [Nombre] NVARCHAR(50) NOT NULL,
    [Contraseña] NVARCHAR(50) NOT NULL
    -- Specify more columns here
);
GO
