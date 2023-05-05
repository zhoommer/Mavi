import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class SinginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email address.' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Your password must be at least 6 characters!' })
  @IsStrongPassword({}, { message: 'Your password is not strong enough!' })
  password: string;
}
