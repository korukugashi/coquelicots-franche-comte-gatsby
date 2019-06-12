
import CMS from 'netlify-cms-app'

import ActualitePreview from './preview-templates/ActualitePreview'
import GroupePreview from './preview-templates/GroupePreview';
import AffichePreview from './preview-templates/AffichePreview';
import GaleriePreview from './preview-templates/GaleriePreview';
import PartenairePreview from './preview-templates/PartenairePreview';
import SoutienPreview from './preview-templates/SoutienPreview';

import '../components/all.sass'

CMS.registerPreviewTemplate('actualites', ActualitePreview)
CMS.registerPreviewTemplate('groupes', GroupePreview)
CMS.registerPreviewTemplate('affiches', AffichePreview)
CMS.registerPreviewTemplate('galerie', GaleriePreview)
CMS.registerPreviewTemplate('partenaires', PartenairePreview)
CMS.registerPreviewTemplate('soutiens', SoutienPreview)