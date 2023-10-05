# InventuraAPI
Inventura API for Smartsoft Inventura App built with Node.js and Express

## Configuration

The database connection for this project is configured in the `.env` file. It contains the following values, which are used to connect to the MS SQL Server:

  ```
PORT=[Port of the API]
DATABASE_NAME=[Database name]
DATABASE_USERNAME=[Username]
DATABASE_PASSWORD=[User password]
DATABASE_HOST=[Hostname]
  ```

## Install API as Windows service

To install the API as Windows service, run these commands:

  ```
npm install
node service
  ```

## SQL Server script

The data is sourced from the Smartsoft Knjigovodstvo application, and the structure is as follows:

```
CREATE TABLE [dbo].[artikli_inventura](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[pdok_art] [varchar](13) NULL,
	[pdok_nart] [varchar](380) NULL,
	[art_ean] [varchar](13) NULL,
	[art_ean1] [varchar](13) NULL,
	[pdok_jmj] [varchar](4) NULL,
	[pdok_csp] [money] NULL,
	[pdok_knj] [float] NULL,
	[pdok_dat] [datetime] NULL,
	[pdok_kol] [decimal](18, 2) NULL,
	[pdok_vrijeme_ocitanja] [datetime] NOT NULL,
	[art_ocitano] [int] NULL,
	[inv_user] [nvarchar](50) NULL,
 CONSTRAINT [PK_artikli_inventura] PRIMARY KEY CLUSTERED ([id] ASC)
);
```
```
CREATE TRIGGER [UpdateDateTimeTrigger]
ON [artikli_inventura]
AFTER UPDATE
AS
BEGIN
    UPDATE [artikli_inventura]
    SET [pdok_vrijeme_ocitanja] = GETDATE()
    FROM [artikli_inventura]
    INNER JOIN [inserted] ON [artikli_inventura].[id] = [inserted].[id];
END;
GO
```