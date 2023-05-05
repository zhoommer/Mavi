-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `hashedRt` VARCHAR(191) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `birthDate` DATE NULL,
    `gender` BOOLEAN NULL,
    `adress` VARCHAR(191) NULL,
    `photos` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `User_Information_mobile_key`(`mobile`),
    UNIQUE INDEX `User_Information_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `subtitle` VARCHAR(191) NULL,
    `price` DOUBLE NULL,
    `discountedPrice` DOUBLE NULL DEFAULT 0,
    `code` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `length` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products_Info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cotton` INTEGER NULL,
    `spandex` INTEGER NULL,
    `modal` INTEGER NULL,
    `linen` INTEGER NULL,
    `polyester` INTEGER NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `Products_Info_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Information` ADD CONSTRAINT `User_Information_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Info` ADD CONSTRAINT `Products_Info_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
