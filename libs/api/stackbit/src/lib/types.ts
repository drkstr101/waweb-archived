export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

/**
 * Make all fields in a type optional
 */
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

/**
 * Transform all fields into a maybe
 */
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

/**
 * Metadata is injected into each model instance upon
 * instantiation, and contains information pertaining
 * to the model AST.
 */
export interface Metadata extends Record<string, unknown> {
  readonly id: string;
  readonly source: string;
  readonly modelType: string;
  readonly modelName: string;
  readonly modelLabel: string;
  readonly relSourcePath: string;
  readonly relProjectPath: string;
  readonly sourceName: string;
  readonly sourcePath: string;
}

/**
 * Base type for all stackbit models.
 */
export interface Model {
  readonly type: string;
  readonly __metadata: Metadata;
}

export interface MetaTag {
  readonly property: string;
  readonly content: string;
  readonly format: Maybe<string>;
}

export interface PaginationData {
  pageIndex: number;
  baseUrlPath: string;
  numOfPages: number;
  numOfTotalItems: number;
  items: PostLayoutModel[];
}

export interface Model {
  readonly __metadata: Metadata;
  readonly type: string;
  [k: string]: unknown;
}

export interface SeoModel extends Model {
  readonly metaTitle: Maybe<string>;
  readonly metaDescription: Maybe<string>;
  readonly titleSuffix: Maybe<string>;
  readonly socialImage: Maybe<string>;
  readonly metaTags: Array<MetaTag>;
}

export interface MediaModel extends Model {
  readonly alt: Maybe<string>;
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface CategoryModel extends Model {
  readonly name: string;
  readonly slug: string;
  readonly description: Maybe<string>;
}

export interface PageModel extends Model {
  readonly slug: Maybe<string>;
  readonly layout: string;
  readonly title: string;
  readonly seo: Maybe<SeoModel>;
  readonly sections: SectionModel[];
  readonly content: Maybe<string>;
}

export interface ContentModel extends Model {
  readonly elementId: Maybe<string>;
  readonly slot: Maybe<string>;
  readonly styles: Record<string, any>;
}

export interface SectionModel extends ContentModel {
  title: Maybe<string>;
  subtitle: Maybe<string>;
  content: Maybe<string>;
}

export interface BadgeModel extends ContentModel {
  readonly label: string;
}

export interface ActionModel extends ContentModel {
  readonly label: Maybe<string>;
  readonly altText: Maybe<string>;
  readonly url: string;
  readonly showIcon: Maybe<boolean>;
  readonly icon: string;
  readonly iconPosition: string;
  readonly style: string;
}

export interface LabeledNavModel extends ContentModel {
  readonly label: Maybe<string>;
  readonly text: string;
  readonly to: string;
  readonly variant: Maybe<'primary' | 'secondary' | 'neutral' | 'accent'>;
}

export interface CheckboxFormControlModel extends ContentModel {
  readonly name: string;
  readonly label: Maybe<string>;
  readonly isRequired: Maybe<boolean>;
  readonly width: string;
}

export interface ConfigModel extends Model {
  readonly brandName: string;
  readonly repo: string;
  readonly header: Maybe<HeaderModel>;
  readonly footer: Maybe<FooterModel>;
  readonly seo: Maybe<SeoModel>;
}

export interface ContactSection extends SectionModel {
  readonly backgroundSize: string;
  readonly form: Maybe<FormBlockModel>;
  readonly media: Maybe<ImageBlockModel | VideoBlockModel>;
}

export interface CtaSection extends SectionModel {
  readonly backgroundSize: string;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly backgroundImage: Maybe<ImageBlockModel>;
}

export interface EmailFormControlModel extends ContentModel {
  readonly name: Maybe<string>;
  readonly label: Maybe<string>;
  readonly hideLabel: Maybe<boolean>;
  readonly placeholder: Maybe<string>;
  readonly isRequired: Maybe<boolean>;
  readonly width: string;
}

export interface FeatureHighlightSection extends SectionModel {
  readonly backgroundSize: string;
  readonly badge: Maybe<BadgeModel>;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly media: Maybe<ImageBlockModel | VideoBlockModel>;
}

export interface FeaturedItemModel extends ContentModel {
  readonly title: string;
  readonly subtitle: Maybe<string>;
  readonly text: Maybe<string>;
  readonly featuredImage: Maybe<MediaModel>;
  readonly actions: Array<ActionModel | LinkModel>;
}

export interface FeaturedItemsSection extends SectionModel {
  readonly items: Array<FeaturedItemModel>;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly columns: Maybe<number>;
  readonly enableHover: Maybe<boolean>;
}

export interface FeaturedPeopleSection extends SectionModel {
  readonly variant: string;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly people: Array<PersonModel>;
}

export type FeaturedPostsSectionModel = PostFeedSectionModel;

export interface FooterModel extends ContentModel {
  readonly logo: Maybe<MediaModel>;
  readonly copyrightText: string;
  readonly legalLinks: Array<ActionModel | LinkModel>;
}

export interface FormBlockModel extends ContentModel {
  readonly variant: string;
  readonly fields: Array<
    | TextFormControlModel
    | EmailFormControlModel
    | TextareaFormControlModel
    | CheckboxFormControlModel
    | SelectFormControlModel
  >;
  readonly submitLabel: Maybe<string>;
  readonly action: string;
  readonly destination: Maybe<string>;
}

export interface HeaderModel extends ContentModel {
  readonly logo: Maybe<MediaModel>;
  readonly primaryLinks: LinkModel[];
}

export interface HeroSectionModel extends SectionModel {
  readonly badge: Maybe<BadgeModel>;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly media: Maybe<ImageBlockModel | VideoBlockModel>;
}

export interface ImageBlockModel extends ContentModel {
  readonly caption: Maybe<string>;
  readonly opacity: Maybe<number>;
  readonly media: MediaModel;
}

export interface LinkModel extends ContentModel {
  readonly label: Maybe<string>;
  readonly altText: Maybe<string>;
  readonly url: string;
}

export interface MediaGallerySection extends SectionModel {
  readonly images: Array<ImageBlockModel>;
  readonly spacing: Maybe<number>;
  readonly columns: Maybe<number>;
  readonly aspectRatio: string;
  readonly imageSizePx: Maybe<number>;
  readonly showCaption: Maybe<boolean>;
  readonly enableHover: Maybe<boolean>;
}

export interface MetaTagModel extends Model {
  readonly property: string;
  readonly content: Maybe<string>;
}

export interface PageLayout extends PageModel {
  readonly sections: Array<SectionModel>;
}

export interface PostFeedSectionModel extends SectionModel {
  readonly showDate: Maybe<boolean>;
  readonly showAuthor: Maybe<boolean>;
  readonly showExcerpt: Maybe<boolean>;
  readonly variant: string;
  readonly actions: Array<ActionModel | LinkModel>;
  readonly posts: Array<PostLayoutModel>;
  readonly annotatePosts: Maybe<boolean>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PagedPostsSectionModel extends PostFeedSectionModel {}

export interface PersonModel extends Model {
  readonly firstName: string;
  readonly lastName: Maybe<string>;
  readonly slug: string;
  readonly role: Maybe<string>;
  readonly bio: Maybe<string>;
  readonly avatar: Maybe<MediaModel>;
}

export type PaginatedPersonModel = PaginatedPostFeed;

export interface PostFeedLayoutModel extends PageModel {
  readonly numOfPostsPerPage: Maybe<number>;
  readonly postFeed: Maybe<PostFeedSectionModel>;
  readonly topSections: Array<SectionModel>;
  readonly bottomSections: Array<SectionModel>;
}

export type PaginatedPostFeed = PostFeedLayoutModel & PaginationData;

export type PostFeedCategoryLayoutModel = PostFeedLayoutModel;

export interface PostLayoutModel extends PageModel {
  readonly date: string;
  readonly author: PersonModel;
  readonly category: CategoryModel;
  readonly excerpt: Maybe<string>;
  readonly featuredImage: Maybe<ImageBlockModel>;
  readonly bottomSections: Array<SectionModel>;
}

export interface DocumentLayoutModel extends PageModel {
  readonly author: PersonModel;
}

export interface QuoteSection extends SectionModel {
  readonly quote: string;
  readonly name: Maybe<string>;
  readonly backgroundImage: Maybe<ImageBlockModel>;
}

export interface RecentPostsSection extends PostFeedSectionModel {
  readonly recentCount: Maybe<number>;
}

export interface SelectFormControlModel extends ContentModel {
  readonly name: string;
  readonly label: Maybe<string>;
  readonly hideLabel: Maybe<boolean>;
  readonly defaultValue: Maybe<string>;
  readonly options: string;
  readonly isRequired: Maybe<boolean>;
  readonly width: string;
}

export interface FaqSection extends SectionModel {
  readonly actions: Array<ActionModel | LinkModel>;
  readonly items: Array<FaqItemModel>;
}

export interface FaqItemModel extends ContentModel {
  readonly question: string;
  readonly answer: string;
}

export interface TestimonialModel extends ContentModel {
  readonly quote: string;
  readonly name: Maybe<string>;
  readonly title: Maybe<string>;
  readonly image: Maybe<ImageBlockModel>;
}

export interface TestimonialsSection extends SectionModel {
  readonly variant: string;
  readonly testimonials: Array<TestimonialModel>;
}

export interface TextFormControlModel extends ContentModel {
  readonly name: string;
  readonly label: Maybe<string>;
  readonly hideLabel: Maybe<boolean>;
  readonly placeholder: Maybe<string>;
  readonly isRequired: Maybe<boolean>;
  readonly width: string;
}

export interface TextBlockModel extends ContentModel {
  readonly colors: string;
  readonly content: Maybe<string>;
}

export interface TextareaFormControlModel extends ContentModel {
  readonly name: string;
  readonly label: Maybe<string>;
  readonly hideLabel: Maybe<boolean>;
  readonly placeholder: Maybe<string>;
  readonly isRequired: Maybe<boolean>;
  readonly width: string;
}

export interface VideoBlockModel extends ContentModel {
  readonly title: Maybe<string>;
  readonly url: string;
  readonly autoplay: Maybe<boolean>;
  readonly loop: Maybe<boolean>;
  readonly muted: Maybe<boolean>;
  readonly controls: Maybe<boolean>;
  readonly aspectRatio: string;
}
