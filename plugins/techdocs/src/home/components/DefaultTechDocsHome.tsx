/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  Content,
  ContentHeader,
  SupportButton,
  TableColumn,
  TableProps,
} from '@backstage/core-components';
import {
  EntityListContainer,
  FilterContainer,
  FilteredEntityLayout,
} from '@backstage/plugin-catalog';
import {
  EntityListProvider,
  EntityOwnerPicker,
  EntityTagPicker,
  UserListFilterKind,
  UserListPicker,
} from '@backstage/plugin-catalog-react';
import { TechDocsPageWrapper } from './TechDocsPageWrapper';
import { TechDocsPicker } from './TechDocsPicker';
import { DocsTableRow, EntityListDocsTable } from './Tables';

/**
 * Props for {@link DefaultTechDocsHome}
 *
 * @public
 */
export type DefaultTechDocsHomeProps = {
  initialFilter?: UserListFilterKind;
  columns?: TableColumn<DocsTableRow>[];
  actions?: TableProps<DocsTableRow>['actions'];
};

export const DefaultTechDocsHome = (props: DefaultTechDocsHomeProps) => {
  const { initialFilter = 'all', columns, actions } = props;
  return (
    <TechDocsPageWrapper>
      <Content>
        <ContentHeader title="">
          <SupportButton>
            Discover documentation in your ecosystem.
          </SupportButton>
        </ContentHeader>
        <EntityListProvider>
          <FilteredEntityLayout>
            <FilterContainer>
              <TechDocsPicker />
              <UserListPicker initialFilter={initialFilter} />
              <EntityOwnerPicker />
              <EntityTagPicker />
            </FilterContainer>
            <EntityListContainer>
              <EntityListDocsTable actions={actions} columns={columns} />
            </EntityListContainer>
          </FilteredEntityLayout>
        </EntityListProvider>
      </Content>
    </TechDocsPageWrapper>
  );
};
