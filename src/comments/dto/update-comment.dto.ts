import { IsOptional, IsString } from 'class-validator'

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  text?: string
}
