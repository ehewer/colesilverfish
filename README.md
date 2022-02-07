# A Photography Portfolio Website
[colesilverfish.com](https://www.colesilverfish.com)

## About
This is a personal project to create a photography portfolio website. The goal is to learn about web dev frameworks and tools like React and AWS, while also obtaining a practical personal website as a bonus.

## Recent Changelog
- February 2022:
    - Updated Gatsby from V2 to V4, along with all plugins to their latest versions
    - Updated general site appearance and page layout

## Running the site
Use `npm start` or `gatsby develop` to start a development server.

## Images
Most images on the site use `gatsby-plugin-image` (formerly `gatsby-image`, now deprecated). Images are stored locally and were fetched using a GraphQL query, but are now sourced using the local path. 

I originally planned to store all images in an S3 bucket and dynamically update the gallery when new images were uploaded. I plan to revisit this in the future.

## Todo (tolearn)
1. React (JavaScript library)
    - including JSX, a JavaScript syntax extention
2. Gatsby (React-based framework)
3. AWS
    - Amplify: full-stack application deployment & development
        - Authentication
        - API
        - File storage
    - S3: storage
    - Route 53: DNS
    - CloudFront: content delivery
    - ?Lambda?: serverless computation
4. GraphQL (API query language)
5. Lighthouse (web page quality analysis)
