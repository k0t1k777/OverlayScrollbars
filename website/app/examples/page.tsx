import { Link } from '~/components/Link';
import { PageContainer } from '~/components/PageContainer';
import type { Metadata } from 'next';

export interface Example {
  name: string;
  url: string;
}

export const metadata: Metadata = {
  title: 'OverlayScrollbars Examples',
};

const renderExample = (logo: string, framework: string, examples: Example[]) => {
  return (
    <div className="flex-1 whitespace-nowrap border border-slate-200 px-3 py-5 rounded-lg shadow-lg shadow-slate-300/25 bg-white">
      <div className="relative w-16 h-16 mx-auto mb-6">
        <div
          style={{ backgroundImage: `url(${logo})` }}
          className="bg-contain bg-center bg-no-repeat w-full h-full [filter:blur(20px)] opacity-30"
        />
        <img
          src={logo}
          alt={framework}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
      <h2 className="font-medium text-base text-center">{framework} Examples</h2>
      <ul className="list-disc list-inside px-3 mt-6 space-y-2">
        {examples.map(({ name, url }) => (
          <li key={`${name}${url}`}>
            <Link href={url} external>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExamplesPage = () => {
  return (
    <PageContainer className="h-full">
      <main className="h-full grid items-center justify-items-center">
        <div className="w-full grid gap-6 grid-cols-fit-56 py-6">
          {renderExample('/OverlayScrollbars/icon/javascript.svg', 'JavaScript', [
            { name: 'Demo App', url: '/OverlayScrollbars/examples/overlayscrollbars' },
            { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars' },
          ])}
          {renderExample(
            'https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-react/logo.svg',
            'React',
            [
              { name: 'Demo App', url: '/OverlayScrollbars/example/react' },
              { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars-react' },
            ]
          )}
          {renderExample(
            'https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-vue/logo.svg',
            'Vue',
            [
              { name: 'Demo App', url: '/OverlayScrollbars/example/vue' },
              { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars-vue' },
            ]
          )}
          {renderExample(
            'https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-ngx/logo.svg',
            'Angular',
            [
              { name: 'Demo App', url: '/OverlayScrollbars/example/angular' },
              { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars-ngx' },
            ]
          )}
          {renderExample(
            'https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-solid/logo.svg',
            'Solid',
            [
              { name: 'Demo App', url: '/OverlayScrollbars/example/solid' },
              { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars-solid' },
            ]
          )}
          {renderExample(
            'https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-svelte/logo.svg',
            'Svelte',
            [
              { name: 'Demo App', url: '/OverlayScrollbars/example/svelte' },
              { name: 'StackBlitz', url: 'https://stackblitz.com/edit/overlayscrollbars-svelte' },
            ]
          )}
        </div>
      </main>
    </PageContainer>
  );
};

export default ExamplesPage;