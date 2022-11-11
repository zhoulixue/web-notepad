import {validate, Allow, Min} from "class-validator";

export class Post {

    @Allow()
    title: string;

    @Min(0)
    views: number;
    @Allow()
    nonWhitelistedProperty: number;
}

let post = new Post();
// post.title = 'Hello world!';
post.views = 420;

post.nonWhitelistedProperty = 69;
(post as any).anotherNonWhitelistedProperty = "something";

// whitelist: true, forbidNonWhitelisted: true 校验不存在的属性，和没有加Allow的属性
validate(post, { whitelist: true, forbidNonWhitelisted: true, skipMissingProperties: true }).then(errors => {
  console.log(errors)
  // post.nonWhitelistedProperty is not defined
  // (post as any).anotherNonWhitelistedProperty is not defined
});