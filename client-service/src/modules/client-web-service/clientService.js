const { OK, CREATED, NO_CONTENT, NOT_FOUND } = require("../../core/http-status-codes");
const {
  buildInternalServerErrorResponse,
} = require("../../core/helpers/response-builders/internalServerError");

const clientRepository = require("./clientRepository");

async function getClients({ filters, pagination }) {
  try {
    const [count, clients] = await Promise.all([
      clientRepository.countClients({ filters }),
      clientRepository.getClients({ filters, pagination }),
    ]);
    pagination.setCount(count);
    return {
      statusCode: OK,
      clients,
    };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

async function getClientById(id) {
  try {
    const client = await clientRepository.getClientById(id);
    if (client) {
      return { statusCode: OK, client };
    }
    return { statusCode: NOT_FOUND };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

async function createClient({ name, email, phone }) {
  try {
    const client = await clientRepository.createClient({
      name,
      email,
      phone,
    });
    return { statusCode: CREATED, client };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

async function updateClientById(id, options) {
  try {
    const client = await clientRepository.getClientById(id);
    if (!client) {
      return { statusCode: NOT_FOUND };
    }
    const updatedClient = await clientRepository.updateClientById(id, {
      ...options,
      deleted: false,
    });
    return { statusCode: OK, client: updatedClient };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

async function deleteClientById(id) {
  try {
    const client = await clientRepository.getClientById(id);
    if (!client) {
      return { statusCode: NOT_FOUND };
    }
    await clientRepository.deleteClientById(id);
    return { statusCode: NO_CONTENT };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClientById,
  deleteClientById,
};
