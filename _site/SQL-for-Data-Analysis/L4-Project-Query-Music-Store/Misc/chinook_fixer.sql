/*************************************************************************
Renames all the table names and columns to eliminate the "" in querrying.

To set the search path in postgres:
SET search_path = my_schema, "$user", public;
**************************************************************************/

ALTER TABLE "Album" RENAME TO Album;
ALTER TABLE "Artist" RENAME TO Artist;
ALTER TABLE "Customer" RENAME TO Customer;
ALTER TABLE "Employee" RENAME TO Employee;
ALTER TABLE "Genre" RENAME TO Genre;
ALTER TABLE "Invoice" RENAME TO Invoice;
ALTER TABLE "InvoiceLine" RENAME TO InvoiceLine;
ALTER TABLE "MediaType" RENAME TO MediaType;
ALTER TABLE "Playlist" RENAME TO PlayList;
ALTER TABLE "PlaylistTrack" RENAME TO PlayListTrack;
ALTER TABLE "Track" RENAME TO Track;

ALTER TABLE artist RENAME COLUMN "ArtistId" TO ArtistId;
ALTER TABLE artist RENAME COLUMN "Name" TO Name;

ALTER TABLE album RENAME COLUMN "AlbumId" TO AlbumId;
ALTER TABLE album RENAME COLUMN "Title" TO Title;
ALTER TABLE album RENAME COLUMN "ArtistId" TO ArtistId;

ALTER TABLE customer RENAME COLUMN "LastName" TO LastName;
ALTER TABLE customer RENAME COLUMN "Company" TO Company;
ALTER TABLE customer RENAME COLUMN "Address" TO Address;
ALTER TABLE customer RENAME COLUMN "City" TO City;
ALTER TABLE customer RENAME COLUMN "State" TO State;
ALTER TABLE customer RENAME COLUMN "Country" TO Country;
ALTER TABLE customer RENAME COLUMN "PostalCode" TO PostalCode;
ALTER TABLE customer RENAME COLUMN "Phone" TO Phone;
ALTER TABLE customer RENAME COLUMN "Fax" TO Fax;
ALTER TABLE customer RENAME COLUMN "Email" TO Email;
ALTER TABLE customer RENAME COLUMN "SupportRepId" TO SupportRepId;

ALTER TABLE employee RENAME COLUMN "EmployeeId" TO EmployeeId;
ALTER TABLE employee RENAME COLUMN "LastName" TO LastName;
ALTER TABLE employee RENAME COLUMN "FirstName" TO FirstName;
ALTER TABLE employee RENAME COLUMN "Title" TO Title;
ALTER TABLE employee RENAME COLUMN "ReportsTo" TO ReportsTo;
ALTER TABLE employee RENAME COLUMN "BirthDate" TO Birthdate;
ALTER TABLE employee RENAME COLUMN "HireDate" TO HireDate;
ALTER TABLE employee RENAME COLUMN "Address" TO Address;
ALTER TABLE employee RENAME COLUMN "City" TO City;
ALTER TABLE employee RENAME COLUMN "State" TO State;
ALTER TABLE employee RENAME COLUMN "Country" TO Country;
ALTER TABLE employee RENAME COLUMN "PostalCode" TO PostalCode;
ALTER TABLE employee RENAME COLUMN "Phone" TO Phone;
ALTER TABLE employee RENAME COLUMN "Fax" TO Fax;
ALTER TABLE employee RENAME COLUMN "Email" TO Email;

ALTER TABLE genre RENAME COLUMN "GenreId" TO GenreId;
ALTER TABLE genre RENAME COLUMN "Name" TO Name;

ALTER TABLE invoice RENAME COLUMN "InvoiceId" TO InvoiceId;
ALTER TABLE invoice RENAME COLUMN "CustomerId" TO CustomerId;
ALTER TABLE invoice RENAME COLUMN "InvoiceDate" TO InvoiceDate;
ALTER TABLE invoice RENAME COLUMN "BillingAddress" TO BillingAddress;
ALTER TABLE invoice RENAME COLUMN "BillingCity" TO BillingCity;
ALTER TABLE invoice RENAME COLUMN "BillingState" TO BillingState;
ALTER TABLE invoice RENAME COLUMN "BillingCountry" TO BillingCountry;
ALTER TABLE invoice RENAME COLUMN "BillingPostalCode" TO BillingPostalCode;
ALTER TABLE invoice RENAME COLUMN "Total" TO Total;

ALTER TABLE InvoiceLine RENAME COLUMN "InvoiceLineId" TO InvoiceLineId;
ALTER TABLE InvoiceLine RENAME COLUMN "InvoiceId" TO InvoiceId;
ALTER TABLE InvoiceLine RENAME COLUMN "TrackId" TO TrackId;
ALTER TABLE InvoiceLine RENAME COLUMN "UnitPrice" TO UnitPrice;
ALTER TABLE InvoiceLine RENAME COLUMN "Quantity" TO Quantity;

ALTER TABLE MediaType RENAME COLUMN "MediaTypeId" TO MediaTypeId;
ALTER TABLE MediaType RENAME COLUMN "Name" TO Name;

ALTER TABLE Playlist RENAME COLUMN "PlaylistId" TO PlaylistId;
ALTER TABLE Playlist RENAME COLUMN "Name" TO Name;

ALTER TABLE PlaylistTrack RENAME COLUMN "PlaylistId" TO PlaylistId;
ALTER TABLE PlaylistTrack RENAME COLUMN "TrackId" TO TrackId;

ALTER TABLE Track RENAME COLUMN "TrackId" TO TrackId;
ALTER TABLE Track RENAME COLUMN "Name" TO Name;
ALTER TABLE Track RENAME COLUMN "AlbumId" TO AlbumId;
ALTER TABLE Track RENAME COLUMN "MediaTypeId" TO MediaTypeId;
ALTER TABLE Track RENAME COLUMN "GenreId" TO GenreId;
ALTER TABLE Track RENAME COLUMN "Composer" TO Composer;
ALTER TABLE Track RENAME COLUMN "Milliseconds" TO Milliseconds;
ALTER TABLE Track RENAME COLUMN "Bytes" TO Bytes;
ALTER TABLE Track RENAME COLUMN "UnitPrice" TO UnitPrice;
