import React from 'react';

import {mountWithTheme} from 'sentry-test/enzyme';

import SimilarScoreCard from 'app/components/similarScoreCard';

describe('SimilarScoreCard', function () {
  beforeEach(function () {});

  afterEach(function () {});

  it('renders', function () {
    const wrapper = mountWithTheme(<SimilarScoreCard />);
    expect(wrapper).toSnapshot();
  });

  it('renders with score list', function () {
    const wrapper = mountWithTheme(
      <SimilarScoreCard
        scoreList={[
          ['exception:message:character-shingles', null],
          ['exception:stacktrace:application-chunks', 0.8],
          ['exception:stacktrace:pairs', 1],
          ['message:message:character-shingles', 0.5],
          ['unknown:foo:bar', 0.5],
        ]}
      />
    );
    expect(wrapper).toSnapshot();
  });
});
