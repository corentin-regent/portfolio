import { describe, expect, it } from 'vitest';
import { extractScores } from '../../../scripts/generate-lighthouse-report.js';

describe('extractScores', () => {
  it('should compute the scores as expected', () => {
    expect(
      extractScores([
        {
          url: 'https://corentin-regent.github.io/portfolio/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_29.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_29.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_51.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_51.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/contact/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_01.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_01.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/contact/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_12.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_12.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/experience/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_34.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_34.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/experience/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_56.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_56.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/projects/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_08.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_08.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/projects/',
          isRepresentativeRun: false,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_31.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_31.report.json',
          summary: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/',
          isRepresentativeRun: true,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_40.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_-2025_01_04_14_56_40.report.json',
          summary: {
            performance: 0.25,
            accessibility: 0,
            'best-practices': 1,
            seo: 1,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/contact/',
          isRepresentativeRun: true,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_23.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_contact_-2025_01_04_14_57_23.report.json',
          summary: {
            performance: 0.25,
            accessibility: 0.25,
            'best-practices': 1,
            seo: 1,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/experience/',
          isRepresentativeRun: true,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_45.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_experience_-2025_01_04_14_57_45.report.json',
          summary: {
            performance: 0.5,
            accessibility: 0.5,
            'best-practices': 1,
            seo: 0.75,
          },
        },
        {
          url: 'https://corentin-regent.github.io/portfolio/projects/',
          isRepresentativeRun: true,
          htmlPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_20.report.html',
          jsonPath:
            '/home/runner/work/portfolio/portfolio/.lighthouseci/corentin_regent_github_io-_portfolio_projects_-2025_01_04_14_58_20.report.json',
          summary: {
            performance: 1,
            accessibility: 0.25,
            'best-practices': 1,
            seo: 0.25,
          },
        },
      ])
    ).toEqual({
      performance: 0.5,
      accessibility: 0.25,
      'best-practices': 1,
      seo: 0.75,
    });
  });
});
