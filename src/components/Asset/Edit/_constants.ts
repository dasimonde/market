import {
  Credentials,
  Metadata,
  Service,
  ServiceComputeOptions
} from '@oceanprotocol/lib'
import { parseConsumerParameters, secondsToString } from '@utils/ddo'
import { ComputeEditForm, MetadataEditForm, ServiceEditForm } from './_types'

export function getInitialValues(
  metadata: Metadata,
  service: Service,
  credentials: Credentials,
  price: string,
  paymentCollector: string,
  assetState: string
): Partial<MetadataEditForm> {
  return {
    name: metadata?.name,
    description: metadata?.description,
    price,
    links: [{ url: '', type: 'url' }],
    files: [{ url: '', type: 'hidden' }],
    timeout: secondsToString(service?.timeout),
    author: metadata?.author,
    tags: metadata?.tags,
    usesConsumerParameters: metadata?.algorithm?.consumerParameters?.length > 0,
    consumerParameters: parseConsumerParameters(
      metadata?.algorithm?.consumerParameters
    ),
    paymentCollector,
    allow:
      credentials?.allow?.find((credential) => credential.type === 'address')
        ?.values || [],
    deny:
      credentials?.deny?.find((credential) => credential.type === 'address')
        ?.values || [],
    assetState,
    service: {
      usesConsumerParameters: service?.consumerParameters?.length > 0,
      consumerParameters: parseConsumerParameters(service?.consumerParameters)
    },
    license: metadata?.license
  }
}

export const getServiceInitialValues = (
  service: Service,
  accessDetails: AccessDetails
): ServiceEditForm => {
  return {
    name: service.name,
    description: service.description,
    price: accessDetails.price,
    paymentCollector: accessDetails.paymentCollector,
    files: [{ url: '', type: 'hidden' }],
    timeout: secondsToString(service.timeout),
    usesConsumerParameters: service.consumerParameters?.length > 0,
    consumerParameters: parseConsumerParameters(service.consumerParameters)
  }
}

export function getComputeSettingsInitialValues({
  publisherTrustedAlgorithms,
  publisherTrustedAlgorithmPublishers
}: ServiceComputeOptions): ComputeEditForm {
  const allowAllPublishedAlgorithms = publisherTrustedAlgorithms === null
  const publisherTrustedAlgorithmsForForm = allowAllPublishedAlgorithms
    ? null
    : publisherTrustedAlgorithms.map((algo) => algo.did)

  return {
    allowAllPublishedAlgorithms,
    publisherTrustedAlgorithms: publisherTrustedAlgorithmsForForm,
    publisherTrustedAlgorithmPublishers
  }
}
