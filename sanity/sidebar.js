import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

// build custom sidebar
export default function Sidebar() {
  return S.list().title(`Slick's Slices`).items([
    S.listItem()
    .title('Home Page')
    .icon(() => <strong>🏡</strong>)
    .child(
      S.editor()
        .schemaType('storeSettings')
        .documentId('downtown')
    ),
    // add rest of document items
    ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings'),
  ])
}