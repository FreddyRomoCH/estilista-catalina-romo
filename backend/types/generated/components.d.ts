import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface ComponentPrecio extends Struct.ComponentSchema {
  collectionName: 'components_component_precios';
  info: {
    displayName: 'precio';
    icon: 'plane';
  };
  attributes: {
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentServicio extends Struct.ComponentSchema {
  collectionName: 'components_component_servicios';
  info: {
    displayName: 'servicio';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentTrabajo extends Struct.ComponentSchema {
  collectionName: 'components_component_trabajos';
  info: {
    displayName: 'trabajo';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['lighter', 'darker']> &
      Schema.Attribute.DefaultTo<'lighter'>;
    columns: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentYo extends Struct.ComponentSchema {
  collectionName: 'components_component_yos';
  info: {
    displayName: 'yo';
    icon: 'emotionHappy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images', true>;
  };
}

export interface LayoutHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_banners';
  info: {
    displayName: 'Hero Banner';
    icon: 'picture';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files'>;
    buttons: Schema.Attribute.Component<'component.link', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPrecios extends Struct.ComponentSchema {
  collectionName: 'components_layout_precios';
  info: {
    displayName: 'Precios';
    icon: 'star';
  };
  attributes: {
    precio: Schema.Attribute.Component<'component.precio', true>;
  };
}

export interface LayoutQuienSoy extends Struct.ComponentSchema {
  collectionName: 'components_layout_quien_soys';
  info: {
    displayName: 'Quien Soy';
    icon: 'emotionHappy';
  };
  attributes: {
    yo: Schema.Attribute.Component<'component.yo', false>;
  };
}

export interface LayoutServicios extends Struct.ComponentSchema {
  collectionName: 'components_layout_servicios';
  info: {
    displayName: 'Servicios';
    icon: 'apps';
  };
  attributes: {
    servicio: Schema.Attribute.Component<'component.servicio', true>;
  };
}

export interface LayoutTrabajos extends Struct.ComponentSchema {
  collectionName: 'components_layout_trabajos';
  info: {
    displayName: 'Trabajos';
    icon: 'calendar';
  };
  attributes: {
    trabajo: Schema.Attribute.Component<'component.trabajo', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'component.precio': ComponentPrecio;
      'component.servicio': ComponentServicio;
      'component.trabajo': ComponentTrabajo;
      'component.yo': ComponentYo;
      'layout.hero-banner': LayoutHeroBanner;
      'layout.precios': LayoutPrecios;
      'layout.quien-soy': LayoutQuienSoy;
      'layout.servicios': LayoutServicios;
      'layout.trabajos': LayoutTrabajos;
    }
  }
}
