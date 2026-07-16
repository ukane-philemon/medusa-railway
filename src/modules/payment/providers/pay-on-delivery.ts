import {
  AbstractPaymentProvider,
  PaymentSessionStatus,
} from "@medusajs/framework/utils"
import {
  CreatePaymentProviderSession,
  PaymentProviderError,
  PaymentProviderSessionResponse,
  ProviderWebhookPayload,
  UpdatePaymentProviderSession,
  WebhookActionResult,
} from "@medusajs/framework/types"

class PayOnDeliveryProviderService extends AbstractPaymentProvider {
  static identifier = "pay_on_delivery"

  async initiatePayment(
    context: CreatePaymentProviderSession
  ): Promise<PaymentProviderSessionResponse> {
    return {
      data: {
        status: "pending_delivery",
      },
    }
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    return PaymentSessionStatus.AUTHORIZED
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<
    | { status: PaymentSessionStatus; data: Record<string, unknown> }
    | PaymentProviderError
  > {
    return {
      status: PaymentSessionStatus.AUTHORIZED,
      data: paymentSessionData,
    }
  }

  async updatePayment(
    context: UpdatePaymentProviderSession
  ): Promise<PaymentProviderSessionResponse> {
    return {
      data: context.data ?? {},
    }
  }

  async capturePayment(
    paymentData: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return paymentData
  }

  async refundPayment(
    paymentData: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return paymentData
  }

  async cancelPayment(
    paymentData: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return paymentData
  }

  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return paymentSessionData
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return paymentSessionData
  }

  async getWebhookActionAndData(
    payload: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    return { action: "not_supported" }
  }
}

export default PayOnDeliveryProviderService
