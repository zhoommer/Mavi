/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsEmail({}, { message: "Please enter a valid email address." })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Your password must be at least 6 characters!' })
  @IsStrongPassword({}, { message: 'Your password is not strong enough!' })
  password: string;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsMobilePhone('tr-TR')
  mobile: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  @IsNotEmpty()
  @IsBoolean()
  gender: boolean;

  @IsNotEmpty()
  @IsString()
  adress: string;

}