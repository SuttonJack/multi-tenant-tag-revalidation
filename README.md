## A multi-tenant demo using the app directory

- This app is deployed on a wildcard, `*.mmnt.li`

- The subdomain is used as the [tag](https://github.com/SuttonJack/multi-tenant-tag-revalidation/blob/main/src/lib/getSiteData.ts#L9) in `revalidateTag` to enable on-demand revalidation for each site indivually

### Try it out

1. [alpha.mmnt.li](https://alpha.mmnt.li/)
1. [beta.mmnt.li](https://beta.mmnt.li/)
1. [gamma.mmnt.li](https://gamma.mmnt.li/)
1. [delta.mmnt.li](https://delta.mmnt.li/)
