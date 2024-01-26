import { NextRequest, NextResponse } from 'next/server';

// Példa: pages/api/github-content/[fileName].js
export default async function GET(req: NextRequest, res: NextResponse) {
  const url = req.nextUrl;
  // A 'fileName' query paraméter kinyerése
  const fileName = url.searchParams.get('fileName');
  try {
    const githubResponse = await fetch(
      `https://raw.githubusercontent.com/dnlmlszl/fake-posts/main/${fileName}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer: ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    if (!githubResponse.ok) {
      throw new Error('Failed to fetch GitHub content');
    }
    const content = await githubResponse.text();
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
