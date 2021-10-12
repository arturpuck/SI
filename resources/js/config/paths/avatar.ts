const paths : {
    avatarRootDirectory : string,
    defaultAvatarFileName : string,
    getDefaultAvatarPath() : string,
} = {
   avatarRootDirectory : '/images/decoration/users/avatars/',
   defaultAvatarFileName : 'default.svg',
   getDefaultAvatarPath() {
       return `${this.avatarRootDirectory}${this.defaultAvatarFileName}`;
   }
};

export default paths;
